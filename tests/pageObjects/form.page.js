class FormPage {
  // Define o seletor para o botão de forms
  get formOption() {
    return $('//android.widget.TextView[@text="Forms"]')
  }

  // Seletor do campo de input field
  get inputFieldInput() {
    return $('//android.widget.EditText[@content-desc="text-input"]')
  }

  // Seletor do campo de input field
  get typedField() {
    return $('//android.widget.TextView[@content-desc="input-text-result"]')
  }

  // Define o seletor para o botão de switch
  get switchOption() {
    return $('//android.widget.Switch[@content-desc="switch"]')
  }

  // Define o seletor para o texto do switch
  get switchText() {
    return $('//android.widget.TextView[@content-desc="switch-text"]')
  }

  // Define o seletor para o dropdown
  get dropdownOption() {
    return $('//android.widget.EditText[@resource-id="text_input"]')
  }

  // Define o seletor para o Active Button
  get activeButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup'
    )
  }

  // Método para clicar no botão de forms
  async formButton() {
    await this.formOption.click()
  }

  // Método para digitar no campo de input
  async enterInputField(text) {
    await this.inputFieldInput.setValue(text)
  }

  // Método para verificar o texto digitado
  async getTypedFieldText() {
    return await this.typedField.getText()
  }

  // Método para clicar no botão de switch
  async switchButton() {
    await this.switchOption.click()
  }

  // Método para obter o texto do switch
  async getSwitchText() {
    return await this.switchText.getText()
  }

  // Método para clicar no botão de dropdown e selecionar uma opção
  async selectDropdownOption(optionText) {
    await this.dropdownOption.click()
    const option = $(`//android.widget.CheckedTextView[@text="${optionText}"]`)
    await option.click()
  }

  // Método para clicar no botão ativo
  async clickActiveButton() {
    await this.activeButton.click()
  }

  // Método para obter a mensagem do botão ativo
  async getActiveButtonMessage() {
    const message = await $(
      '//android.widget.TextView[@resource-id="android:id/message"]'
    )
    return await message.getText()
  }
}

export default new FormPage()
