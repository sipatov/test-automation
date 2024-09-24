import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    port: 4723,
    specs: [
        './tests/*.ts'
    ],
    exclude: ['node_modules'],
    maxInstances: 10,
    capabilities: [
        {
            "appium:automationName": "UiAutomator2",
            "appium:platformName": "Android",
            "appium:platformVersion": "14",
            "appium:deviceName": "R5CX42GEGCM",
            "appium:appPackage": "com.flowersua",
            "appium:appActivity": ".MainActivity",
            "appium:appWaitActivity": ".MainActivity",
            "appium:appWaitPackage": "com.flowersua"
        }
    ],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',  // Directory for storing Allure results
            disableWebdriverStepsReporting: true,  // Disable step logging if you want a cleaner report
            disableWebdriverScreenshotsReporting: false,  // Enable screenshots reporting
        }]
    ],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
} as any
