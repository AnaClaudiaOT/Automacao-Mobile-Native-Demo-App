import LoginPage from '../pageObjects/login.page';
import { browser } from '@wdio/globals';

describe('Teste de Login', () => {
  it('Cadastrar usuário', async () => {
    await browser.pause(10000); // Aguarda o aplicativo carregar
    await LoginPage.clickLoginButton();
    await browser.pause(10000); // Aguarda
    await LoginPage.clickSignUpButton();
    await browser.pause(10000); // Aguarda
    await LoginPage.enterEmail('ana@teste.com');
    await LoginPage.enterPassword('123456');
    await LoginPage.confirmPassword('123456');
  });

  it('Login de Usuário', async () => {
    await browser.pause(10000); // Aguarda o aplicativo carregar
    await LoginPage.clickLoginButton();
    await browser.pause(10000); // Aguarda
    await LoginPage.enterEmail('ana@teste.com');
    await LoginPage.enterPassword('123456');
  });
});
