// components/ProvinceSelector.tsx
"use client";

interface ProvinceSelectorProps {
  province: string;
  onChange: (province: string) => void;
}

export default function ProvinceSelector({
  province,
  onChange,
}: ProvinceSelectorProps) {
  const provinces = [
    { code: "alberta", name: "Alberta" },
    { code: "british_columbia", name: "British Columbia" },
    { code: "manitoba", name: "Manitoba" },
    { code: "new_brunswick", name: "New Brunswick" },
    { code: "newfoundland", name: "Newfoundland and Labrador" },
    { code: "northwest_territories", name: "Northwest Territories" },
    { code: "nova_scotia", name: "Nova Scotia" },
    { code: "nunavut", name: "Nunavut" },
    { code: "ontario", name: "Ontario" },
    { code: "prince_edward_island", name: "Prince Edward Island" },
    { code: "quebec", name: "Quebec" },
    { code: "saskatchewan", name: "Saskatchewan" },
    { code: "yukon", name: "Yukon" },
  ];

  return (
    <div>
      <p className="mb-4">
        Select your province of residence for accurate provincial tax
        calculations.
      </p>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="province">
          Province:
        </label>
        <select
          id="province"
          value={province}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {provinces.map((p) => (
            <option key={p.code} value={p.code}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
