# Automação de Testes Mobile - wdiodemoapp

Este projeto visa garantir a qualidade de um aplicativo mobile desenvolvido em React Native, automatizando testes funcionais com WebdriverIO e Appium. Os resultados são integrados ao Allure para geração de relatórios detalhados.

---

## Índice

1. [Contexto](#contexto)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Execução do Projeto](#execução-do-projeto)
4. [Testes Implementados](#testes-implementados)
5. [Geração de Relatórios](#geração-de-relatórios)

---

## Contexto

Os testes deste projeto foram baseados no repositório [native-demo-app](https://github.com/webdriverio/native-demo-app), que fornece exemplos práticos de como utilizar WebdriverIO e Appium para automação de testes em aplicações mobile.

Este projeto cobre os seguintes casos de uso:

- Garantir a execução correta do aplicativo em dispositivos Android
- Validar funcionalidades principais do aplicativo, como Login, Cadastro, Navegação entre telas, Drag and Drop, preenchimento de formulários e validações de mensagens de erros.
- Gerar relatórios detalhados com Allure para acompanhamento dos resultados.

### Funcionalidades do Aplicativo

- **🏠 Home:** Introdução ao aplicativo.
- **🕸️ WebView:** Acessa o site WebdriverIO para testar mudanças de contexto e interações.
- **🔐 Login:** Tela de login
- **📄 Forms:** Interações com campos de texto, switches, dropdowns e botões.
- **🤏 Drag:** Resolução de um quebra-cabeça arrastando peças para a posição correta.

---

## Configuração do Ambiente

Requisitos e ferramentas necessárias para configurar o ambiente de desenvolvimento e testes do projeto.

### Requisitos

1. **Git:** Necessário para clonar o repositório e gerenciar o controle de versão.

   - [Baixar Git](https://git-scm.com/).
   - Verifique a instalação executando:
     ```bash
     git --version
     ```
     _O Git é essencial para baixar e enviar códigos do repositório._

2. **Node.js:** Versão 18 ou superior.

   - [Baixar Node.js](https://nodejs.org/).
     _O Node.js permite a execução de scripts e gerencia dependências do projeto._

3. **Java JDK:** Instale o Java JDK 17.

   - [Download do Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).
   - Configure a variável de ambiente `JAVA_HOME`:
     - **Windows:** Adicione o caminho do JDK nas Variáveis de Ambiente do Sistema.
     - **macOS/Linux:** Inclua no arquivo `~/.bashrc` ou `~/.zshrc`:
       `bash
export JAVA_HOME=/caminho/para/jdk17
export PATH=$JAVA_HOME/bin:$PATH
`
       _O JDK é necessário para compilar e executar aplicações Android._

4. **Android Studio:** Necessário para compilar e executar o aplicativo Android.

   - [Baixar Android Studio](https://developer.android.com/studio).
   - Configure o `ANDROID_HOME` e adicione os caminhos `platform-tools` e `tools` ao `PATH` do sistema.
     _O Android Studio fornece os SDKs e ferramentas necessárias para desenvolver e testar no Android._

5. **Xcode** (apenas em macOS): Necessário para execução em simuladores iOS.

   - Instale as ferramentas de linha de comando:
     ```bash
     xcode-select --install
     ```
     _O Xcode permite compilar e testar aplicações no ambiente iOS._

6. **Appium:** Ferramenta para automação de testes mobile.

   - Instale globalmente:
     ```bash
     npm install -g appium
     ```
     _O Appium permite controlar dispositivos e emuladores para automação de testes._

7. **Appium Inspector:** Ferramenta para mapeamento e inspeção de elementos.

   - [Download do Appium Inspector](https://github.com/appium/appium-inspector/releases).
     _O Appium Inspector é usado para identificar elementos da interface durante o desenvolvimento dos testes._

8. **Allure:** Ferramenta para geração de relatórios detalhados.
   - Instale globalmente:
     ```bash
     npm install -g allure-commandline --save-dev
     ```
     _O Allure gera relatórios detalhados e visualmente intuitivos dos testes executados._

---

## Execução do Projeto

### Download do Projeto

1. Crie uma pasta no local de sua preferência.
2. Abra o terminal no diretório criado.
3. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd wdiodemoapp
   ```

   _O repositório contém todos os arquivos necessários para execução do projeto._

4. Instale as dependências:
   ```bash
   npm install
   ```
   _Este comando baixa todas as bibliotecas e dependências necessárias para o projeto._

### Executando o Metro Bundler

1. Inicie o Metro Bundler:
   ```bash
   npm start
   ```
   _O Metro Bundler empacota o código JavaScript para execução no aplicativo._

### Execução no Android

- **Modo Desenvolvimento:**

  ```bash
  npm run android.dev
  ```

  _Executa o aplicativo em modo de desenvolvimento no emulador ou dispositivo Android._

- **Build de Release:**
  ```bash
  npm run android.release
  ```
  _Gera uma versão de produção do aplicativo para Android._

## Testes Implementados

### Testes Automatizados com WebdriverIO

- **Login:** Validações de login, Cadastro e mensagens de erro
- **Formulários:** Interações com campos de texto, switches e dropdowns.
- **Navegação:** Navegação entre telas e validações de texto
- **Drag and Drop:** Resolução de um quebra-cabeça arrastando peças para a posição correta

### Execução dos Testes

- **Modo Geral:**
  ```bash
  npm run test.mobile
  ```
  _Executa todos os testes configurados._

--

## Geração de Relatórios

### Relatórios Allure

1. **Gerar relatório:**

   ```bash
   npm run allure:generate
   ```

   _Gera os relatórios de testes no formato Allure._

2. **Abrir relatório no navegador:**
   ```bash
   npm run allure:open
   ```
   _Abre o relatório gerado no navegador para visualização detalhada._

Exemplo de Relatório gerado após execução dos testes:

![image](https://github.com/user-attachments/assets/23a31e85-3afa-4b46-ac8d-ffe27d7768ca)

![image](https://github.com/user-attachments/assets/e6e19951-47dc-40bc-b2f4-10acd8c8c78f)
