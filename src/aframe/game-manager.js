import GameState from "../game/GameState";
import OrderSystem from "../game/OrderSystem";

AFRAME.registerComponent('game-manager', {
    init() {
        console.log('Game Manager initialized');
        this.startNewOrder();
    },

    startNewOrder() {
        const order = OrderSystem.generateOrder();

        GameState.startOrder(order);

        console.log('New Order:', order);

        this.el.emit('new-order', { order });
    }
})   