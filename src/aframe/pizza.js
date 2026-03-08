import GameState from '../game/GameState.js'

AFRAME.registerComponent('pizza', {

  init() {
    this.ingredients = []
    GameState.pizza = this.ingredients
  },

  addIngredient(type) {

    this.ingredients.push(type)

    console.log('Pizza now has:', this.ingredients)

  }

})