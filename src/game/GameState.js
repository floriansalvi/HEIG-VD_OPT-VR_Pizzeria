class GameState {
    constructor() {
        this.phase = 'WAITING';
        this.currentOrder = null;
        this.pizza = null;
        this.startTime = null;
        this.money = 0;
    }

    startOrder(order) {
        this.currentOrder = order;
        this.phase = 'PREPARING';
        this.startTime = Date.now();
    }

    setPizza(pizzaData) {
        this.pizza = pizzaData;
    }

    finishOrder(score) {
        this.money += score;
        this.phase = 'SCORING';
    }

    reset() {
        this.phase = 'WAITING';
        this.currentOrder = null;
        this.pizza = null;
        this.startTime = null;
    }

    getTimeElapsed() {
        if (!this.startTime) return 0;
        return (Date.now() - this.startTime) / 1000;
    }
}

export default new GameState();