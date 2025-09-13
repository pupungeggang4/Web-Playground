class Battle {
    constructor() {
        this.player = new PlayerBattle()
    }
}

class PlayerBattle {
    constructor() {
        this.hp = 0
        this.hpMax = 0
        this.crystal = []
        this.hand = []
        this.deck = []
    }
}
