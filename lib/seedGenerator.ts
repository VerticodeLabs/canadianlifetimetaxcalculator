// lib/seedGenerator.ts

// Import the random-word-slugs package
// First install using: npm install random-word-slugs
import { generateSlug } from "random-word-slugs";

/**
 * Generates a memorable three-word seed phrase with hyphens
 * Similar to what3words format, using adjective-adjective-noun pattern
 * @returns {string} A hyphenated three-word phrase like "brave-gentle-phoenix"
 */
export function generateSeed(): string {
  // Generate a three-word slug with specific formatting
  return generateSlug(3, {
    format: "kebab", // Use hyphen separators
    partsOfSpeech: ["adjective", "adjective", "noun"], // Memorable pattern
    categories: {
      // Restrict to more common and memorable categories
      adjective: ["color", "appearance", "personality", "size", "time"],
      noun: ["animals", "food", "place", "thing", "media"],
    },
  });
}

/**
 * Validates if a string matches the seed format (three hyphenated words)
 * @param {string} seed - The seed phrase to validate
 * @returns {boolean} Whether the seed matches the expected format
 */
export function isValidSeed(seed: string): boolean {
  if (!seed) return false;

  const parts = seed.split("-");
  return parts.length === 3 && parts.every((part) => /^[a-z]+$/.test(part));
}
