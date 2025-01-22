import { Config } from "webdriverio"
import { execSync } from "child_process"

export const config: Config = {
  runner: "local",
  port: 4723,
  path: "/wd/hub",

  specs: ["./tests/specs/**/*.ts"],
  exclude: [],

  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      browserName: "app",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"],
      },
      "appium:deviceName": "emulator",
      "appium:automationName": "UiAutomator2",
      "appium:newCommandTimeout": 150,
      "appium:autoGrantPermissions": true,
      "appium:autoAcceptAlerts": true,
      "appium:app": "tests/app/app-release.apk",
      "appium:adbExecTimeout": 60000,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 60000,
  connectionRetryTimeout: 300000,
  connectionRetryCount: 3,

  services: [
    "chromedriver",
    ["appium", { args: { address: "localhost", port: 4723 } }],
  ],

  framework: "mocha",
  reporters: [["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  onPrepare: async function () {
    const emulatorName = "<NomeDoSeuEmulador>" // Substitua pelo nome do seu emulador

    try {
      console.log("Verificando se o emulador está rodando...")
      const devices = execSync("adb devices").toString()

      if (!devices.includes("emulator")) {
        console.log("Iniciando o emulador...")
        execSync(
          `emulator -avd ${emulatorName} -no-snapshot-save -no-boot-anim`,
          {
            stdio: "inherit",
          }
        )
        console.log(
          "Emulador iniciado com sucesso. Aguardando inicialização..."
        )
        execSync("sleep 30") // Aguarda o emulador inicializar
      } else {
        console.log("O emulador já está em execução.")
      }
    } catch (err) {
      console.error("Erro ao iniciar o emulador:", err)
      throw err
    }
  },

  before: async function (capabilities, specs) {
    await browser.url("") // Navegue para a URL inicial do app
  },

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      await browser.takeScreenshot()
    }
  },

  onComplete: async function () {
    try {
      console.log("Encerrando o emulador...")
      execSync("adb -s emulator-5554 emu kill", { stdio: "inherit" })
      console.log("Emulador encerrado com sucesso.")
    } catch (err) {
      console.error("Erro ao encerrar o emulador:", err)
    }
  },
}

export default config
