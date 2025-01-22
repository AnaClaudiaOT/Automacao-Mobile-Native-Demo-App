import NavigatePage from "../pageObjects/navigate.page"
import { browser } from "@wdio/globals"

describe("Navegação entre telas", () => {
  beforeEach(async () => {
    await browser.reloadSession() // Reinicia a sessão do navegador para garantir um estado limpo
    await browser.pause(30000) // Aguarda o aplicativo carregar
  })

  it("Deve navegar para a página Home e validar a mensagem exibida", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await NavigatePage.navigateToHome()
    await browser.pause(5000) // Aguarda a navegação
    const homeMessage = await NavigatePage.getHomeMessageText()
    expect(homeMessage).toBe("Demo app for the appium-boilerplate")
  })

  it("Deve navegar para a página Login e validar a mensagem exibida", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await NavigatePage.navigateToLogin()
    await browser.pause(5000) // Aguarda a navegação
    const loginMessage = await NavigatePage.getLoginMessageText()
    expect(loginMessage).toBe(
      "When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."
    )
  })

  it("Deve clicar no elemento Swipe e validar a mensagem exibida", async () => {
    await browser.pause(10000) // Aguarda o aplicativo carregar
    await NavigatePage.clickSwipeElement()
    await browser.pause(5000) // Aguarda a ação

    const hiddenMessage = await NavigatePage.getHiddenMessageText()
    expect(hiddenMessage).toBe("Or swipe vertical to find what I'm hiding.")
  })
})
