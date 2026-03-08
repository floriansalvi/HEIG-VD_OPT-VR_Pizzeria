AFRAME.registerComponent('order-screen', {

  init() {
    this.textEl = this.el.querySelector('#order-text')

    this.el.sceneEl.addEventListener('order-started', (e) => {
      this.updateDisplay(e.detail.order)
    })
  },

  updateDisplay(order) {
    if (!order || !order.ingredients) return

    const lines = ['ORDER:']
    
    order.ingredients.forEach(i => {
      lines.push(`- ${i}`)
    })

    this.textEl.setAttribute('value', lines.join('\n'))
  }

})