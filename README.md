# Canadian Tax Calculator

A Next.js application that helps Canadians understand their true tax burden over their lifetime compared to what they would pay in the United States.

Canadian Tax Calculator

## Overview

As Canada's election heats up, taxes—and especially the carbon tax—have become a major source of frustration. Canadians are rightfully asking: **Are we really getting what we pay for?** This tax calculator shows you exactly how much you've paid over your lifetime. Compare this number to the services you actually receive and decide for yourself: Is your money being spent wisely, or is it being wasted?

## Features

- **Lifetime Tax Calculation**: Calculate your federal and provincial taxes paid over your entire career
- **US/Canada Comparison**: See how your tax burden compares to what you would pay in the United States
- **Healthcare Cost Analysis**: Understand how much of your tax dollars go toward healthcare compared to US private insurance costs
- **Detailed Breakdown**: View your tax data by year with federal and provincial components
- **Marginal Tax Rate**: See your marginal tax rate for each income year
- **Data Export**: Download your tax data as CSV for further analysis

## Built With

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React](https://reactjs.org/) - UI library

## Getting Started

### Prerequisites

- Node.js 16.8+ and npm/yarn/pnpm

### Installation

1. Clone the repository

```sh
git clone https://github.com/yourusername/canadian-tax-calculator.git
```

2. Install NPM packages

```sh
npm install
# or
yarn
# or
pnpm install
```

3. Run the development server

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## Usage

1. Enter your annual income history by year
2. Select your province
3. Click "Calculate Taxes"
4. View detailed breakdown of your lifetime tax burden
5. Compare with equivalent US tax and healthcare costs

## Data Sources

Our tax calculations and healthcare comparisons use data from:

- Canada Revenue Agency tax brackets (1917-present)
- US Internal Revenue Service tax brackets (1917-present)
- Canadian Medical Association healthcare funding analysis
- Fraser Institute wait times reports
- US healthcare cost projections

## Project Structure

```
canadian-tax-calculator/
├── app/                  # Next.js app directory
│   ├── calculator/       # Calculator page
│   ├── results/          # Results page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── lib/                  # Utility functions and data
│   └── tax-data/         # Tax bracket data by year
├── public/               # Static assets
└── styles/               # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you find this tool useful, please consider:

- [Supporting on GitHub Sponsors](https://github.com/sponsors/VerticodeLabs)
