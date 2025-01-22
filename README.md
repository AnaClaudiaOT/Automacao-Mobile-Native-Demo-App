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
   *O Git é essencial para baixar e enviar códigos do repositório.*

2. **Node.js:** Versão 18 ou superior.
   - [Baixar Node.js](https://nodejs.org/).
   *O Node.js permite a execução de scripts e gerencia dependências do projeto.*

3. **Java JDK:** Instale o Java JDK 17.
   - [Download do Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).
   - Configure a variável de ambiente `JAVA_HOME`:
     - **Windows:** Adicione o caminho do JDK nas Variáveis de Ambiente do Sistema.
     - **macOS/Linux:** Inclua no arquivo `~/.bashrc` ou `~/.zshrc`:
       ```bash
       export JAVA_HOME=/caminho/para/jdk17
       export PATH=$JAVA_HOME/bin:$PATH
       ```
   *O JDK é necessário para compilar e executar aplicações Android.*

4. **Android Studio:** Necessário para compilar e executar o aplicativo Android.
   - [Baixar Android Studio](https://developer.android.com/studio).
   - Configure o `ANDROID_HOME` e adicione os caminhos `platform-tools` e `tools` ao `PATH` do sistema.
   *O Android Studio fornece os SDKs e ferramentas necessárias para desenvolver e testar no Android.*

5. **Xcode** (apenas em macOS): Necessário para execução em simuladores iOS.
   - Instale as ferramentas de linha de comando:
     ```bash
     xcode-select --install
     ```
   *O Xcode permite compilar e testar aplicações no ambiente iOS.*

6. **Appium:** Ferramenta para automação de testes mobile.
   - Instale globalmente:
     ```bash
     npm install -g appium
     ```
   *O Appium permite controlar dispositivos e emuladores para automação de testes.*

7. **Appium Inspector:** Ferramenta para mapeamento e inspeção de elementos.
   - [Download do Appium Inspector](https://github.com/appium/appium-inspector/releases).
   *O Appium Inspector é usado para identificar elementos da interface durante o desenvolvimento dos testes.*

8. **Allure:** Ferramenta para geração de relatórios detalhados.
   - Instale globalmente:
     ```bash
     npm install -g allure-commandline --save-dev
     ```
   *O Allure gera relatórios detalhados e visualmente intuitivos dos testes executados.*

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
   *O repositório contém todos os arquivos necessários para execução do projeto.*

4. Instale as dependências:
   ```bash
   npm install
   ```
   *Este comando baixa todas as bibliotecas e dependências necessárias para o projeto.*

### Executando o Metro Bundler

1. Inicie o Metro Bundler:
   ```bash
   npm start
   ```
   *O Metro Bundler empacota o código JavaScript para execução no aplicativo.*

### Execução no Android

- **Modo Desenvolvimento:**
  ```bash
  npm run android.dev
  ```
  *Executa o aplicativo em modo de desenvolvimento no emulador ou dispositivo Android.*

- **Build de Release:**
  ```bash
  npm run android.release
  ```
  *Gera uma versão de produção do aplicativo para Android.*

## Testes Implementados

### Testes Automatizados com WebdriverIO

- **Login:** Validações de credenciais e autenticação biométrica.
- **WebView:** Interações com o conteúdo em uma WebView.
- **Formulários:** Interações com campos de texto, switches e dropdowns.
- **Gestos:** Testes de swipe e drag-and-drop.

### Execução dos Testes

- **Modo Geral:**
  ```bash
  npm run test.mobile
  ```
  *Executa todos os testes configurados.*

---

## Geração de Relatórios

### Relatórios Allure

1. **Gerar relatório:**
   ```bash
   npm run allure:generate
   ```
   *Gera os relatórios de testes no formato Allure.*

2. **Abrir relatório no navegador:**
   ```bash
   npm run allure:open
   ```
   *Abre o relatório gerado no navegador para visualização detalhada.*

Exemplo de Relatório gerado após execução dos testes:

![image](https://github.com/user-attachments/assets/23a31e85-3afa-4b46-ac8d-ffe27d7768ca)

![image](https://github.com/user-attachments/assets/e6e19951-47dc-40bc-b2f4-10acd8c8c78f)



