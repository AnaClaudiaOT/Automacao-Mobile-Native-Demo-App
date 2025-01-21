class LoginPage {
  // Define o seletor para o botão de login
  get loginButton() {
    return $('//android.widget.TextView[@text="Login"]');
  }

  // Define o seletor para o botão de sign up
  get signUpButton() {
    return $('//android.widget.TextView[@text="Sign up"]');
  }

  // Seletor do campo de e-mail Sign Up
  get emailSignUpInput() {
    return $('//android.widget.EditText[@content-desc="input-email"]');
  }

  // Seletor do campo de password
  get passwordInput() {
    return $('//android.widget.EditText[@content-desc="input-password"]');
  }

  // Seletor do campo de Confirm Password
  get passwordConfirmInput() {
    return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
  }

  // Método para clicar no botão de login
  async clickLoginButton() {
    const isButtonPresent = await this.loginButton.isExisting();
    if (!isButtonPresent) {
      throw new Error('O botão de login não está presente no DOM.');
    }
    await this.loginButton.click();
  }
  ///////////////////////////////////////////////
  // Método para clicar no botão de sign up
  ///////////////////////////////////////////////
  async clickSignUpButton() {
    const isButtonPresent = await this.signUpButton.isExisting();
    if (!isButtonPresent) {
      throw new Error('O botão de sign up não está presente no DOM.');
    }
    await this.signUpButton.click();
  }

  // Método para digitar o e-mail
  async enterEmail(email) {
    // Corrigido para usar o seletor correto
    await this.emailSignUpInput.setValue(email);
  }

  // Método para digitar o password
  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }

  // Método para confirmar o password
  async confirmPassword(password) {
    await this.passwordConfirmInput.setValue(password);
  }
}

export default new LoginPage();
