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
  // Seletor para o botão Swipe
  get swipeElement() {
    return $('//android.widget.TextView[@text="Swipe"]')
  }
  // Seletor para a mensagem Swipe
  get hiddenMessageElement() {
    return $(
      '//android.widget.TextView[@text="Or swipe vertical to find what I\'m hiding."]'
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
  // Método para navegar para a página Swipe
  async clickSwipeElement() {
    await this.swipeElement.click()
  }
  // Método para obter a mensagem da página Swipe
  async getHiddenMessageText() {
    return await this.hiddenMessageElement.getText()
  }
}

export default new NavigatePage()
