import { Config } from 'webdriverio';

export const config: Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    path: '/wd/hub', // Caminho base do servidor Appium
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/specs/**/*.ts' // Ajuste conforme a localização dos arquivos de teste
    ],
    exclude: [],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1, // Limitar a execução a 1 dispositivo por vez
    capabilities: [
        {
            platformName: 'Android',
            browserName: 'app',
            'goog:chromeOptions': {
                args: ['--headless', '--disable-gpu'],
            },
            'appium:deviceName': 'emulator',
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 150,
            'appium:autoGrantPermissions': true,
            'appium:autoAcceptAlerts': true,
            'appium:app': 'tests/app/app-release.apk', // Ajuste conforme o caminho do app
            'appium:adbExecTimeout': 20000
            // 'appium:chromedriverExecutable': 'C:/Users/Ana/Downloads/native-demo-app/chrome/win64-124.0.6367.207/chrome-win64/chromedriver.exe'
        },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    //
    // Test runner services
    services: ['chromedriver', ['appium', { args: { address: 'localhost', port: 4723 } }]],

    framework: 'mocha',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    //
    // =====
    // Hooks
    // =====
    before: async function (capabilities, specs) {
        // Inicialize o browser antes dos testes
        await browser.url(''); // Navegue para a URL inicial do app
    },
    afterTest: async function (test, context, { error, passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
};

export default config;
