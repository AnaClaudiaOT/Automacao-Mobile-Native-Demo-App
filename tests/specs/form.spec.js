import FormPage from "../pageObjects/form.page"
import { browser } from "@wdio/globals"

describe("Preenchimento de Formulário", () => {
  it("Deve preencher o formulário e validar as ações", async () => {
    beforeEach(async () => {
      await browser.reloadSession() // Reinicia a sessão do navegador para garantir um estado limpo
      await browser.pause(10000) // Aguarda o aplicativo carregar
    })

    // Digitar um texto no campo de input
    const inputText = "Teste Campo"

    await browser.pause(10000) // Aguarda o aplicativo carregar
    await FormPage.formButton()
    await browser.pause(10000) // Aguarda
    await FormPage.enterInputField(inputText)

    // Validar que o campo typedField contém o mesmo valor digitado
    const typedText = await FormPage.getTypedFieldText()
    expect(typedText).toBe(inputText)

    // Clicar no botão switchOption
    await FormPage.switchButton()

    // Validar que o texto do switch é 'Click to turn the switch OFF'
    const switchText = await FormPage.getSwitchText()
    expect(switchText).toBe("Click to turn the switch OFF")

    // Clicar no botão dropdownOption e escolher a opção 'Appium is awesome'
    await FormPage.selectDropdownOption("Appium is awesome")

    // Clicar no botão activeButton
    await FormPage.clickActiveButton()

    // Validar a mensagem 'This button is active'
    const activeButtonMessage = await FormPage.getActiveButtonMessage()
    expect(activeButtonMessage).toBe("This button is active")
  })
})
