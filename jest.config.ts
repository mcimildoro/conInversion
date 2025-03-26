import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!lucide-react|swiper|framer-motion)", // Añade todos los módulos problemáticos
    "/node_modules/(?!swiper|lucide-react|framer-motion)", // Agrega swiper aquí
    "/node_modules/(?!lucide-react)"
  ],

  moduleNameMapper: {
    "^lucide-react$": "<rootDir>/__mocks__/lucide-react.js",
    "^swiper/react$": "<rootDir>/__mocks__/swiper-react.js", // Soluciona Swiper

  },
};

export default createJestConfig(config);
