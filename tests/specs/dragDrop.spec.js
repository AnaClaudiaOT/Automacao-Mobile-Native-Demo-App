import DragDropPage from "../pageObjects/dragDrop.page"
import { browser } from "@wdio/globals"

describe("Teste de Arrastar e Soltar", () => {
  beforeEach(async () => {
    await browser.reloadSession() // Reinicia a sessão do navegador para garantir um estado limpo
    await browser.pause(10000) // Aguarda o aplicativo carregar
  })

  it("Deve arrastar e soltar todos os elementos", async () => {
    // Clicar no botão Drag
    await DragDropPage.clickDragButton()
    await browser.pause(5000) // Aguarda a página de drag carregar

    // Arrastar e soltar os elementos
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL1,
      DragDropPage.dropElementL1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC1,
      DragDropPage.dropElementC1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR1,
      DragDropPage.dropElementR1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL2,
      DragDropPage.dropElementL2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC2,
      DragDropPage.dropElementC2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR2,
      DragDropPage.dropElementR2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL3,
      DragDropPage.dropElementL3
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC3,
      DragDropPage.dropElementC3
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR3,
      DragDropPage.dropElementR3
    )

    // Validar a mensagem de sucesso
    const successMessageText = await DragDropPage.getSuccessMessageText()
    expect(successMessageText).toBe(
      "You made it, click retry if you want to try it again."
    )
  })
  it("Deve arrastar e soltar todos os elementos e clicar no botão Retry", async () => {
    // Clicar no botão Drag
    await DragDropPage.clickDragButton()
    await browser.pause(5000) // Aguarda a página de drag carregar

    // Arrastar e soltar os elementos
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL1,
      DragDropPage.dropElementL1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC1,
      DragDropPage.dropElementC1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR1,
      DragDropPage.dropElementR1
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL2,
      DragDropPage.dropElementL2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC2,
      DragDropPage.dropElementC2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR2,
      DragDropPage.dropElementR2
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementL3,
      DragDropPage.dropElementL3
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementC3,
      DragDropPage.dropElementC3
    )
    await DragDropPage.dragAndDrop(
      DragDropPage.dragElementR3,
      DragDropPage.dropElementR3
    )

    // Validar a mensagem de sucesso
    const successMessageText = await DragDropPage.getSuccessMessageText()
    expect(successMessageText).toBe(
      "You made it, click retry if you want to try it again."
    )

    // Clicar no botão Retry
    await DragDropPage.clickRetryButton()
  })
})
