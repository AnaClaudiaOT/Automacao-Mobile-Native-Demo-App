class DragDropPage {
  // Seletor do botão Drag
  get dragButton() {
    return $('//android.widget.TextView[@text="Drag"]')
  }

  // Seletor dos elementos drag
  get dragElementL1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView'
    )
  }

  get dragElementC1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView'
    )
  }

  get dragElementR1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView'
    )
  }

  get dragElementL2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView'
    )
  }

  get dragElementC2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView'
    )
  }

  get dragElementR2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView'
    )
  }

  get dragElementL3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView'
    )
  }

  get dragElementC3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView'
    )
  }

  get dragElementR3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView'
    )
  }

  // Seletor dos elementos drop
  get dropElementL1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup'
    )
  }

  get dropElementC1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup'
    )
  }

  get dropElementR1() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup'
    )
  }

  get dropElementL2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup'
    )
  }

  get dropElementC2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup'
    )
  }

  get dropElementR2() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup'
    )
  }

  get dropElementL3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup'
    )
  }

  get dropElementC3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup'
    )
  }

  get dropElementR3() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup'
    )
  }

  // Seletor da mensagem de sucesso
  get successMessage() {
    return $(
      '//android.widget.TextView[@text="You made it, click retry if you want to try it again."]'
    )
  }

  // Seletor do botão Retry
  get retryButton() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup'
    )
  }

  // Método para clicar no botão Drag
  async clickDragButton() {
    await this.dragButton.waitForExist({ timeout: 10000 })
    await this.dragButton.click()
  }

  // Método para arrastar e soltar o elemento
  async dragAndDrop(dragElement, dropElement) {
    await dragElement.waitForExist({ timeout: 10000 })
    await dropElement.waitForExist({ timeout: 10000 })
    await dragElement.dragAndDrop(dropElement)
  }

  // Método para obter a mensagem de sucesso
  async getSuccessMessageText() {
    await this.successMessage.waitForExist({ timeout: 10000 })
    return await this.successMessage.getText()
  }

  // Método para clicar no botão Retry
  async clickRetryButton() {
    await this.retryButton.waitForExist({ timeout: 10000 })
    await this.retryButton.click()
  }
}

export default new DragDropPage()
