import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "**/*.spec.{js,jsx,ts,tsx}",
  },
});
