import { Config } from 'webdriverio';
import * as fs from 'fs';
import * as path from 'path';

export const config: Config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    specs: ['./tests/specs/**/*.ts'],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'emulator',
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 300,
            'appium:autoGrantPermissions': true,
            'appium:autoAcceptAlerts': true,
            'appium:app': 'tests/app/app-release.apk',
            'appium:chromedriverExecutable': getChromedriverPath(),
        },
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            'appium',
            {
                args: {
                    address: 'localhost',
                    port: 4723,
                },
            },
        ],
    ],
    framework: 'mocha',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    before: async function (capabilities, specs) {
        console.log('Inicializando o navegador...');
        await browser.url('');
    },
    afterTest: async function (test, context, { error, passed }) {
        try {
            if (!passed) {
                const screenshotPath = path.join('allure-results', `${test.title.replace(/[^a-zA-Z0-9-_]/g, '_')}.png`);
                await browser.saveScreenshot(screenshotPath);
                console.log(`Screenshot salva em: ${screenshotPath}`);
            }
        } catch (err) {
            console.error(`Erro ao capturar screenshot: ${err.message}`);
        }
    },
};

/**
 * Função para obter o caminho correto do chromedriver.
 */
function getChromedriverPath(): string {
    const localPath = path.join(__dirname, 'chrome', 'win64-124.0.6367.207', 'chrome-win64', 'chromedriver.exe');
    const githubActionsPath = '/usr/local/lib/chromedriver';

    if (fs.existsSync(localPath)) {
        console.log(`Chromedriver encontrado no caminho local: ${localPath}`);
        return localPath;
    }

    if (fs.existsSync(githubActionsPath)) {
        console.log(`Chromedriver encontrado no GitHub Actions: ${githubActionsPath}`);
        return githubActionsPath;
    }

    throw new Error('Chromedriver não encontrado. Certifique-se de que ele está instalado e no PATH.');
}

export default config;
