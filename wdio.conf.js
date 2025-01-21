const fs = require('fs');
const path = require('path');
const { addAttachment } = require('@wdio/allure-reporter').default;

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './tests/specs/**/*.js', // Ajuste conforme o diretório real dos seus testes
    ],
    exclude: [],
    maxInstances: 1, // Executa uma instância por vez para testes móveis
    capabilities: [{
        platformName: 'Android',
        browserName: 'app',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        },
        'appium:deviceName': 'pixel_3 (Google)',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 150,
        'appium:autoGrantPermissions': true,
        'appium:autoAcceptAlerts': true,
        'appium:app': 'tests/app/app-release.apk',
        'appium:adbExecTimeout': 60000,
        // 'appium:chromedriverExecutable': 'C:/Users/Ana/Downloads/native-demo-app/chrome/win64-124.0.6367.207/chrome-win64/chromedriver.exe'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 60000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 3,
    services: ['appium'],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false, // Captura os passos do Webdriver
            disableWebdriverScreenshotsReporting: false // Inclui screenshots no relatório
        }],
    ],

    /**
     * Hooks
     */
    beforeTest: async function (test) {
        console.log(`Iniciando o teste: ${test.title}`);
        addAttachment('Inicio do Teste', `Iniciando o teste: ${test.title}`);
    },

    afterTest: async function (test, context, { error }) {
        const fs = require('fs');
        const path = require('path');
        const { addAttachment } = require('@wdio/allure-reporter').default;

        try {
            // Verifica se houve erro no teste
            if (error) {
                console.error(`Erro no teste: ${test.title}`);
            }

            // Captura a screenshot
            const screenshot = await browser.takeScreenshot();

            // Gera um nome seguro para o arquivo baseado no nome do teste
            let safeTestTitle = test.title || 'screenshot';
            safeTestTitle = safeTestTitle.replace(/[^a-zA-Z0-9-_]/g, '_').toLowerCase();

            // Caminho completo onde a screenshot será salva
            const screenshotPath = path.join(__dirname, 'allure-results', `${safeTestTitle}.png`);

            // Salva a screenshot em formato base64
            fs.writeFileSync(screenshotPath, screenshot, 'base64');
            console.log(`Screenshot salva em: ${screenshotPath}`);

            // Adiciona a evidência ao relatório Allure
            addAttachment('Evidência - ' + test.title, fs.readFileSync(screenshotPath), 'image/png');
        } catch (err) {
            console.error(`Erro ao salvar ou anexar a screenshot para o teste "${test.title}":`, err);
        }

        // Log do teste no Allure
        const logContent = error
            ? `Erro no teste: ${test.title}\n${error.message}`
            : `Teste concluído com sucesso: ${test.title}`;
        addAttachment('Log do Teste', logContent);
    },

    onComplete: function () {
        // Gera o relatório Allure automaticamente ao final dos testes
        const { execSync } = require('child_process');
        try {
            console.log('Gerando relatório Allure...');
            execSync('allure generate allure-results --clean', { stdio: 'inherit' });
        } catch (err) {
            console.error('Erro ao gerar relatório Allure:', err);
        }
    },

    onPrepare: function (config, capabilities) {
        const fs = require('fs');
        const path = require('path');

        // Obtem as informações das capabilities
        const platformName = capabilities[0].platformName || 'Desconhecida';
        const browserName = capabilities[0].browserName || 'Não especificado';
        const deviceName = capabilities[0]['appium:deviceName'] || 'Desconhecido';
        const automationName = capabilities[0]['appium:automationName'] || 'Não especificado';
        const appPath = capabilities[0]['appium:app'] || 'Não especificado';
        const chromedriverExecutable = capabilities[0]['appium:chromedriverExecutable'] || 'Não especificado';

        // Conteúdo do arquivo environment.properties
        const environmentContent = `
            Plataforma=${platformName}
            Navegador=${browserName}
            Device=${deviceName}
            AutomationName=${automationName}
            AppPath=${appPath}
            ChromedriverExecutable=${chromedriverExecutable}
        `.trim();

        // Caminho para salvar o arquivo environment.properties
        const environmentFilePath = path.join(__dirname, 'allure-results', 'environment.properties');

        // Gera o arquivo environment.properties
        try {
            fs.writeFileSync(environmentFilePath, environmentContent, { encoding: 'utf-8' });
            console.log(`Arquivo environment.properties gerado em ${environmentFilePath}`);
        } catch (error) {
            console.error('Erro ao criar o arquivo environment.properties:', error);
        }
    },

};
