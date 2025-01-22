class NavigatePage {
  // Seletor para o botão Home
  get homeOption() {
    return $('//android.widget.TextView[@text="Home"]')
  }

  // Seletor para a mensagem Home
  get homeMessage() {
    return $(
      '//android.widget.TextView[@text="Demo app for the appium-boilerplate"]'
    )
  }

  // Seletor para o botão Login
  get loginOption() {
    return $('//android.widget.TextView[@text="Login"]')
  }

  // Seletor para a mensagem Login
  get loginMessage() {
    return $(
      '//android.widget.TextView[@text="When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login."]'
    )
  }

  // Seletor para o botão Webview
  get webviewOption() {
    return $('//android.widget.TextView[@text="Webview"]')
  }

  // Seletor para a mensagem Webview
  get webviewMessage() {
    return $(
      '//android.view.View[@text="Next-gen browser and mobile automation test framework for Node.js"]'
    )
  }

  // Método para navegar para a página Home
  async navigateToHome() {
    await this.homeOption.click()
  }

  // Método para obter a mensagem da página Home
  async getHomeMessageText() {
    return await this.homeMessage.getText()
  }

  // Método para navegar para a página Login
  async navigateToLogin() {
    await this.loginOption.click()
  }

  // Método para obter a mensagem da página Login
  async getLoginMessageText() {
    return await this.loginMessage.getText()
  }

  // Método para navegar para a página Webview
  async navigateToWebview() {
    await this.webviewOption.click()
  }

  // Método para obter a mensagem da página Webview
  async getWebviewMessageText() {
    return await this.webviewMessage.getText()
  }
}

export default new NavigatePage()
