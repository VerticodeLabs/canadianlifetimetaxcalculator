// components/IncomeForm.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal } from "flowbite-react";

import ProvinceSelector from "./ProvinceSelector";

// LocalStorage keys
const STORAGE_INCOME_KEY = "tax-calculator-income";
const STORAGE_SEED_KEY = "tax-calculator-seed";

interface IncomeFormProps {
  onSubmit: (incomeData: Record<number, number>, province: string) => void;
}

export default function IncomeForm({ onSubmit }: IncomeFormProps) {
  const router = useRouter();

  const [province, setProvince] = useState("ontario");
  const [income, setIncome] = useState<Record<number, number>>({});
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const [bulkMode, setBulkMode] = useState(false);
  const [bulkStartYear, setBulkStartYear] = useState(
    new Date().getFullYear() - 5
  );
  const [bulkEndYear, setBulkEndYear] = useState(new Date().getFullYear());
  const [bulkIncome, setBulkIncome] = useState<string>("");

  const [currentIncome, setCurrentIncome] = useState<string>("");
  const [yearError, setYearError] = useState<string>("");
  const [seed, setSeed] = useState<string>("");
  const [showSeedMessage, setShowSeedMessage] = useState(false);
  const [seedInput, setSeedInput] = useState<string>("");
  const [loadingData, setLoadingData] = useState(false);
  const [loading, setLoading] = useState(false);

  const seedPhraseRef = useRef<HTMLDivElement>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedIncome = localStorage.getItem(STORAGE_INCOME_KEY);
    const storedSeed = localStorage.getItem(STORAGE_SEED_KEY);

    if (storedIncome) {
      try {
        const parsedIncome = JSON.parse(storedIncome);
        setIncome(parsedIncome);
      } catch (e) {
        console.error("Failed to parse stored income data", e);
      }
    }

    if (storedSeed) {
      setSeed(storedSeed);
    }
  }, []);

  // Validate year when it changes
  useEffect(() => {
    if (currentYear > new Date().getFullYear()) {
      setYearError("Year cannot be in the future");
    } else {
      setYearError("");
    }
  }, [currentYear]);

  const applyBulkIncome = () => {
    // Create a copy of the current income data
    const updatedIncome = { ...income };

    // Populate the same income for each year in the range
    for (let year = bulkStartYear; year <= bulkEndYear; year++) {
      updatedIncome[year] = parseFloat(bulkIncome);
    }

    // Update the state with the new data
    setIncome(updatedIncome);
    saveToLocalStorage(updatedIncome, seed); // Also save to localStorage
  };

  const handleAddYear = () => {
    if (currentYear > new Date().getFullYear()) {
      setYearError("Year cannot be in the future");
      return;
    }

    if (currentYear && currentIncome) {
      const updatedIncome = {
        ...income,
        [currentYear]: parseFloat(currentIncome),
      };

      setIncome(updatedIncome);
      saveToLocalStorage(updatedIncome, seed);

      setCurrentYear((prev) => prev - 1);
      setCurrentIncome("");
      setYearError("");
    }
  };

  const handleYearChange = (year: number) => {
    // Validate that year is not in the future
    if (year > new Date().getFullYear()) {
      setYearError("Year cannot be in the future");
    } else {
      setYearError("");
    }
    setCurrentYear(year);
  };

  const handleRemoveYear = (year: number) => {
    const newIncome = { ...income };
    delete newIncome[year];
    setIncome(newIncome);
    saveToLocalStorage(newIncome, seed);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(income).length === 0) return;

    setLoading(true);

    try {
      // Call the onSubmit function (API call)
      const results = await onSubmit(income, province);

      // Store results and income data in localStorage for the results page
      localStorage.setItem("tax-results", JSON.stringify(results));
      localStorage.setItem("tax-income-data", JSON.stringify(income));

      // Navigate to results page
      router.push("/results");
    } catch (error) {
      console.error("Error calculating taxes:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveToLocalStorage = (
    incomeData: Record<number, number>,
    savedSeed: string
  ) => {
    localStorage.setItem(STORAGE_INCOME_KEY, JSON.stringify(incomeData));
    if (savedSeed) {
      localStorage.setItem(STORAGE_SEED_KEY, savedSeed);
    }
  };

  const handleSaveToCloud = async () => {
    try {
      const response = await fetch("/api/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ incomeData: income }),
      });

      const data = await response.json<{ seed: string; success: boolean }>();

      if (data.success) {
        setSeed(data.seed);
        setShowSeedMessage(true);
        saveToLocalStorage(income, data.seed);

        setTimeout(() => {
          if (seedPhraseRef.current) {
            seedPhraseRef.current.scrollIntoView({
              behavior: "smooth",
              // block: "center",
            });
          }
        }, 100); // slight delay ensures element has rendered

        // Hide seed message after 60 seconds
        setTimeout(() => {
          setShowSeedMessage(false);
        }, 60000);
      }
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };

  const handleLoadFromSeed = async () => {
    if (!seedInput) return;

    setLoadingData(true);

    try {
      const response = await fetch(
        `/api/load-data?seed=${encodeURIComponent(seedInput)}`
      );
      const data = await response.json<{
        success: boolean;
        incomeData: Record<number, number>;
      }>();

      if (data.success) {
        setIncome(data.incomeData);
        setSeed(seedInput);
        saveToLocalStorage(data.incomeData, seedInput);
        setSeedInput("");
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const sortedYears = Object.keys(income).sort((a, b) => Number(b) - Number(a));
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white ">
      {showSeedMessage && seed && (
        <div
          ref={seedPhraseRef}
          className="mb-6 bg-green-50 p-4 rounded-lg border border-green-200"
        >
          <h3 className="font-medium text-green-700 mb-1">Data Saved!</h3>
          <p className="text-sm text-green-600 mb-2">
            Use this unique phrase to access your data on any device:
          </p>
          <div className="font-mono bg-green-100 p-2 rounded text-center mb-2">
            {seed}
          </div>
          <p className="text-xs text-green-600">
            Copy and save this phrase somewhere safe. You&apos;ll need it to
            recover your data.
          </p>
        </div>
      )}

      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Load Previous Data</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter your seed phrase"
            className="flex-1 p-2 border rounded"
            value={seedInput}
            onChange={(e) => setSeedInput(e.target.value)}
          />
          <button
            type="button"
            onClick={handleLoadFromSeed}
            disabled={loadingData || !seedInput}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loadingData ? "Loading..." : "Load"}
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Enter Your Income History
        </h2>

        <ProvinceSelector province={province} onChange={setProvince} />
        <div className="mb-4 mt-4">
          Add income data for each year you want to calculate taxes for. You can
          add multiple years.
        </div>

        <form onSubmit={handleSubmit}>
          {/* Bulk or Regular Income Input */}
          <div className="mt-4 p-4 border mb-4 rounded bg-gray-50">
            <div className="flex items-center mb-3 justify-between ">
              <h3 className="text-lg font-medium">Income Input</h3>
              <a
                type="button"
                onClick={() => setBulkMode(!bulkMode)}
                className="ml-auto px-3 mb-2 py-1 text-sm "
              >
                {bulkMode ? "Switch to Regular Mode" : "Switch to Range Mode"}
              </a>
            </div>

            {bulkMode ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="">
                  <label className="block text-sm font-medium mb-1">
                    Start Year
                  </label>
                  <input
                    type="number"
                    className="px-3 py-2 border rounded"
                    value={bulkStartYear}
                    onChange={(e) => setBulkStartYear(Number(e.target.value))}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium mb-1">
                    End Year
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded"
                    value={bulkEndYear}
                    onChange={(e) => setBulkEndYear(Number(e.target.value))}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium mb-1">
                    Income for All Years
                  </label>

                  <input
                    type="number"
                    placeholder="Annual income"
                    className="w-full px-3 py-2 border rounded"
                    value={bulkIncome}
                    onChange={(e) => setBulkIncome(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={applyBulkIncome}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Apply to Selected Years
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <input
                    id="year"
                    type="number"
                    className={`w-full p-2 border rounded ${
                      yearError ? "border-red-500" : ""
                    }`}
                    value={currentYear}
                    onChange={(e) => handleYearChange(parseInt(e.target.value))}
                    max={new Date().getFullYear()}
                  />
                  {yearError && (
                    <p className="text-red-500 text-sm mt-1">{yearError}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="income"
                    className="flex items-center text-sm font-medium mb-1"
                  >
                    Income
                    <span
                      className="ml-2 text-blue-600 cursor-pointer"
                      onClick={() => setOpenModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                  </label>
                  <input
                    id="income"
                    type="number"
                    className="w-full p-2 border rounded"
                    value={currentIncome}
                    onChange={(e) => setCurrentIncome(e.target.value)}
                    placeholder="Annual income"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    className={`${
                      yearError
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white px-4 py-2 rounded transition`}
                    onClick={handleAddYear}
                    disabled={!!yearError}
                  >
                    Add Year
                  </button>
                </div>
              </div>
            )}
          </div>

          {sortedYears.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Income History</h3>
              <div className="max-h-64 overflow-y-auto bg-gray-50 p-4 rounded">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Year</th>
                      <th className="text-left">Income</th>
                      <th className="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedYears.map((year) => (
                      <tr key={year}>
                        <td>{year}</td>
                        <td>${income[Number(year)].toLocaleString()}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger text-red-600"
                            onClick={() => handleRemoveYear(Number(year))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              disabled={Object.keys(income).length === 0 || loading}
            >
              {loading ? "Calculating..." : "Calculate Taxes"}
            </button>

            {Object.keys(income).length > 0 && (
              <button
                type="button"
                className="btn btn-secondary bg-purple-600 text-white px-4 py-2 rounded transition"
                onClick={handleSaveToCloud}
              >
                Save Income Data
              </button>
            )}
          </div>
          <small className="form-text text-muted mt-3">
            Note: We do not collect or store any personal information. Income
            information is stored locally and anonymously.
          </small>
        </form>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>How To Recover Old Or Lost T4&apos;s</Modal.Header>
        <Modal.Body>
          <p>
            If you’ve lost one or more T4 slips and need a copy, the absolute
            best place to retrieve them is through the{" "}
            <a href="https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals/about-account.html">
              “My Account”
            </a>{" "}
            section on the CRA’s website. Directly above, in the “How to get a
            T4 online” section, you’ll find some detailed instructions on how to
            access the site.{" "}
          </p>
          <p>
            The CRA should have T4 slips dating back several years. If the
            information you’re seeking is missing, reach out to the human
            resources department of the current or former employer who issued
            the slip. They should be able to set you up.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
