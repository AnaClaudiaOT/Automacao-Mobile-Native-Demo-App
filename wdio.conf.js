const fs = require('fs');
const path = require('path');
const { addAttachment } = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './tests/specs/**/*.js',
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 300,
        'appium:autoGrantPermissions': true,
        'appium:autoAcceptAlerts': true,
        'appium:app': 'tests/app/app-release.apk',
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],

    beforeTest: async function (test) {
        console.log(`Iniciando o teste: ${test.title}`);
        addAttachment('Início do Teste', `Iniciando o teste: ${test.title}`);
    },

    afterTest: async function (test, context, { error }) {
        try {
            const screenshotDir = path.join(__dirname, 'allure-results');
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }

            if (error) {
                console.error(`Erro no teste: ${test.title}`);
            }

            const screenshot = await browser.takeScreenshot();
            const safeTestTitle = (test.title || 'screenshot').replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();
            const screenshotPath = path.join(screenshotDir, `${safeTestTitle}.png`);
            fs.writeFileSync(screenshotPath, screenshot, 'base64');
            console.log(`Screenshot salva em: ${screenshotPath}`);
            addAttachment(`Evidência - ${test.title}`, fs.readFileSync(screenshotPath), 'image/png');
        } catch (err) {
            console.error(`Erro ao salvar ou anexar a screenshot para o teste "${test.title}":`, err);
        }
    },

    onComplete: function () {
        try {
            console.log('Gerando relatório Allure...');
            const { execSync } = require('child_process');
            execSync('allure generate allure-results --clean', { stdio: 'inherit' });
        } catch (err) {
            console.error('Erro ao gerar relatório Allure:', err);
        }
    },

    onPrepare: function (config, capabilities) {
        const environmentDir = path.join(__dirname, 'allure-results');
        if (!fs.existsSync(environmentDir)) {
            fs.mkdirSync(environmentDir, { recursive: true });
        }

        const platformName = capabilities[0].platformName || 'Desconhecida';
        const deviceName = capabilities[0]['appium:deviceName'] || 'Desconhecido';
        const automationName = capabilities[0]['appium:automationName'] || 'Não especificado';
        const appPath = capabilities[0]['appium:app'] || 'Não especificado';

        const environmentContent = `
            Plataforma=${platformName}
            Device=${deviceName}
            AutomationName=${automationName}
            AppPath=${appPath}
        `.trim();

        const environmentFilePath = path.join(environmentDir, 'environment.properties');

        try {
            fs.writeFileSync(environmentFilePath, environmentContent, { encoding: 'utf-8' });
            console.log(`Arquivo environment.properties gerado em ${environmentFilePath}`);
        } catch (error) {
            console.error('Erro ao criar o arquivo environment.properties:', error);
        }
    },
};
