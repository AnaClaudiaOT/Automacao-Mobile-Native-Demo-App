import LoginPage from "../pageObjects/login.page"
import { browser } from "@wdio/globals"

describe("Teste de Login", () => {
  beforeEach(async () => {
    await browser.reloadSession() // Reinicia a sessão do navegador para garantir um estado limpo
    await browser.pause(20000) // Aguarda o aplicativo carregar
  })

  it("Cadastrar usuário", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await LoginPage.clickLoginOption()
    await browser.pause(10000) // Aguarda
    await LoginPage.clickSignUpButton()
    await browser.pause(10000) // Aguarda
    await LoginPage.enterEmail("ana@teste.com")
    await LoginPage.enterPassword("12345678")
    await LoginPage.confirmPassword("12345678")
  })

  it("Login de Usuário", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await LoginPage.clickLoginOption()
    await browser.pause(10000) // Aguarda
    await LoginPage.enterEmail("ana@teste.com")
    await LoginPage.enterPassword("12345678")
    await LoginPage.clickLoginButton()
    // Valida a mensagem de login
    await browser.pause(5000) // Aguarda a mensagem aparecer
    const messageText = await LoginPage.getLoginMessageText()
    expect(messageText).toBe("You are logged in!")
  })

  it("Validar mensagem de erro - E-mail inválido", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await LoginPage.clickLoginOption()
    await browser.pause(10000) // Aguarda
    await LoginPage.enterEmail("ana@teste")
    await LoginPage.enterPassword("12345678")
    await LoginPage.clickLoginButton()

    // Valida a mensagem de erro
    await browser.pause(5000) // Aguarda a mensagem aparecer
    const errorMessageText = await LoginPage.getErrorMessageText()
    expect(errorMessageText).toBe("Please enter a valid email address")
  })

  it("Validar mensagem de erro - Senha com menos de 8 caracteres", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await LoginPage.clickLoginOption()
    await browser.pause(10000) // Aguarda
    await LoginPage.enterEmail("ana@teste.com")
    await LoginPage.enterPassword("123")
    await LoginPage.clickLoginButton()

    // Valida a mensagem de erro de senha
    await browser.pause(5000) // Aguarda a mensagem aparecer
    const passwordErrorMessageText =
      await LoginPage.getPasswordErrorMessageText()
    expect(passwordErrorMessageText).toBe("Please enter at least 8 characters")
  })
})
