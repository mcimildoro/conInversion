import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react|swiper|framer-motion)" // Añade todos los módulos problemáticos
  ],

  moduleNameMapper: {
    "^lucide-react$": "<rootDir>/__mocks__/lucide-react.js", // Evita error con ESM
    "^swiper/react$": "<rootDir>/__mocks__/swiper-react.js", // Soluciona Swiper
  },
};

export default createJestConfig(config);
