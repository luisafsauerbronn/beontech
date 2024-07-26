/// <reference types="cypress" />

const { defineConfig } = require("cypress");

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('./cypress/configs', `${file}.json`);
    return fs.readJson(pathToConfigFile);
}

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = defineConfig({
    e2e: {
        retries: {
            runMode: 2,
        },
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            const file = config.env.configFile || 'hml';
            return config, getConfigurationByFile(file);
        },
        env: {},
    },
    numTestsKeptInMemory: 10,
    requestTimeout: 35000,
    pageLoadTimeout: 25000,
    defaultCommandTimeout: 35000,
    video: false,
});
