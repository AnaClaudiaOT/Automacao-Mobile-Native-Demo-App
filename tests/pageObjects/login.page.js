class LoginPage {
  // Define o seletor para o botão de login
  get loginOption() {
    return $('//android.widget.TextView[@text="Login"]')
  }

  get loginButton() {
    return $('//android.widget.TextView[@text="LOGIN"]')
  }

  // Define o seletor para o botão de sign up
  get signUpButton() {
    return $('//android.widget.TextView[@text="Sign up"]')
  }

  // Seletor do campo de e-mail Sign Up
  get emailSignUpInput() {
    return $('//android.widget.EditText[@content-desc="input-email"]')
  }

  // Seletor do campo de password
  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="input-password"]')
  }

  // Seletor do campo de Confirm Password
  get passwordConfirmInput() {
    return $('//android.widget.EditText[@content-desc="input-repeat-password"]')
  }

  // Seletor do campo de Mensagem de Login
  get loginMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]')
  }

  // Seletor da mensagem de erro de email
  get errorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter a valid email address"]'
    )
  }

  // Seletor da mensagem de erro de senha
  get passwordErrorMessage() {
    return $(
      '//android.widget.TextView[@text="Please enter at least 8 characters"]'
    )
  }

  // Busca mensagem de login
  async getLoginMessageText() {
    return await this.loginMessage.getText()
  }

  // Verifica que mensagem de login está sendo exibida
  async isLoginMessageDisplayed() {
    return await this.loginMessage.isDisplayed()
  }

  // Busca mensagem de erro de email
  async getErrorMessageText() {
    return await this.errorMessage.getText()
  }

  // Busca mensagem de erro de senha
  async getPasswordErrorMessageText() {
    return await this.passwordErrorMessage.getText()
  }

  // Método para clicar na opção de login
  async clickLoginOption() {
    await this.loginOption.waitForExist({ timeout: 10000 })
    await this.loginOption.click()
  }
  // Método para clicar no botão login
  async clickLoginButton() {
    await this.loginButton.waitForExist({ timeout: 10000 })
    await this.loginButton.click()
  }
  // Método para clicar no botão sign up
  async clickSignUpButton() {
    await this.signUpButton.waitForExist({ timeout: 10000 })
    await this.signUpButton.click()
  }

  // Método para digitar o e-mail
  async enterEmail(email) {
    await this.emailSignUpInput.waitForExist({ timeout: 10000 })
    await this.emailSignUpInput.setValue(email)
  }

  // Método para digitar o password
  async enterPassword(password) {
    await this.passwordInput.waitForExist({ timeout: 10000 })
    await this.passwordInput.setValue(password)
  }

  // Método para confirmar o password
  async confirmPassword(password) {
    await this.passwordConfirmInput.waitForExist({ timeout: 10000 })
    await this.passwordConfirmInput.setValue(password)
  }
}

export default new LoginPage()
