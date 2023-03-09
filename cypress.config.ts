import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://admin-demo.nopcommerce.com",
    defaultCommandTimeout: 5000,
    video: false,
    videosFolder: "./output/videos",
    screenshotsFolder: "./output/screenshots",
    pageLoadTimeout: 15000,
    execTimeout: 10000,
    specPattern: "**/*.feature",
    supportFile: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    "env": {
      "qc": "https://web-ninjamart-qa-bo.apac.positivethinking.tech/",
      "uat": "https://web-ninjamart-qa-bo.apac.positivethinking.tech/",
    },
    setupNodeEvents,
  },
});
