// app/calculator/page.tsx
"use client";

import IncomeForm from "@/components/IncomeForm";
import { CalculationResult } from "@/types";

export default function CalculatorPage() {
  const calculateTaxes = async (
    incomeData: Record<number, number>,
    province: string
  ): Promise<CalculationResult> => {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        income: incomeData,
        province,
      }),
    });

    if (!response.ok) {
      throw new Error("Calculation failed");
    }

    return response.json();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Canada Lifetime Tax Calculator</h1>

      <div className="bg-[#f5f5f5] border-l-4 border-[#26374A] p-4 mb-4 mt-6 shadow-sm">
        <span className="text-lg bt-">
          As Canada&lsquo;s election heats up, taxes—and especially the carbon
          tax—have become a major source of frustration. Canadians are
          rightfully asking:{" "}
          <strong>Are we really getting what we pay for?</strong> Our tax
          calculator shows you exactly how much you&lsquo;ve paid over your
          lifetime. Compare this number to the services you actually receive and
          decide for yourself: Is your money being spent wisely, or is it being
          wasted? It&lsquo;s your money—know the truth and hold your government
          accountable.
        </span>

        <div className="support-buttons">
          <a href="https://github.com/sponsors/VerticodeLabs">
            <button className="btn btn-sponsor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25z"></path>
              </svg>
              Sponsor
            </button>
          </a>

          <a
            href="https://github.com/VerticodeLabs/canadianlifetimetaxcalculator"
            className="btn btn-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 98 96"
              fill="currentColor"
            >
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <div className="w-full">
        <IncomeForm onSubmit={calculateTaxes} />
      </div>
    </div>
  );
}
