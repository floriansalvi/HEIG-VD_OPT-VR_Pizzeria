const INGREDIENTS = [
    'mushroom',
    'ham',
    'olive',
    'pepperbell'
]

class OrderSystem {

    generateOrder() {
        const count = Math.floor(Math.random() * 3) + 1
        const shuffledIngredients = INGREDIENTS.sort(() => 0.5 - Math.random())
        return shuffledIngredients.slice(0, count)
    }

    calculateScore(order, pizza, time) {
        let score = 0

        const correctIngredients = pizza.filter(ingredient =>
            order.includes(ingredient)
        ).length

        score += correctIngredients * 10;
        score -= Math.floor(time)

        return Math.max(score, 0)
    }
}

export default new OrderSystem();