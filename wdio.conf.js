const fs = require('fs');
const path = require('path');
const { addAttachment } = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['./tests/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            browserName: 'app', // Adicionado para consistência
            'appium:deviceName': 'emulator',
            'appium:automationName': 'UiAutomator2',
            'appium:newCommandTimeout': 300,
            'appium:autoGrantPermissions': true,
            'appium:autoAcceptAlerts': true,
            'appium:app': 'tests/app/app-release.apk',
            'appium:chromedriverExecutable': getChromedriverPath(), // Definido
        },
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', { outputDir: 'allure-results' }],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    beforeTest: async function (test) {
        console.log(`Iniciando o teste: ${test.title}`);
        addAttachment('Início do Teste', `Iniciando o teste: ${test.title}`);
    },
    afterTest: async function (test, context, { error, passed }) {
        try {
            const screenshotDir = path.join(__dirname, 'allure-results');
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }

            if (!passed) {
                console.error(`Teste "${test.title}" falhou.`);
                const screenshotPath = path.join(
                    screenshotDir,
                    `${test.title.replace(/[^a-zA-Z0-9-_]/g, '_')}.png`
                );
                await browser.saveScreenshot(screenshotPath);
                console.log(`Screenshot salva em: ${screenshotPath}`);
            } else {
                console.log(`Teste "${test.title}" finalizado com sucesso.`);
            }
        } catch (err) {
            console.error(`Erro ao processar o teste "${test.title}": ${err.message}`);
        }
    },
    onPrepare: function (config, capabilities) {
        const environmentDir = path.join(__dirname, 'allure-results');
        if (!fs.existsSync(environmentDir)) {
            fs.mkdirSync(environmentDir, { recursive: true });
        }

        // Garantir consistência nas configurações
        const platformName = capabilities[0].platformName || 'Desconhecida';
        const browserName = capabilities[0].browserName || 'app';
        const deviceName = capabilities[0]['appium:deviceName'] || 'Desconhecido';
        const automationName = capabilities[0]['appium:automationName'] || 'Não especificado';
        const appPath = capabilities[0]['appium:app'] || 'Não especificado';

        const environmentContent = `
    Plataforma=${platformName}
    Navegador=${browserName}
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

/**
 * Função para obter o caminho correto do chromedriver.
 */
function getChromedriverPath() {
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
