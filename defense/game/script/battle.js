class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.field = new BattleField()
        this.wave = []
    }
}

class BattlePlayer() {
    constructor() {
        this.energy = 0
        this.energyMax = 0
        this.hand = []
        this.deck = []
    }
}

class BattleField() {
    constructor() {
        this.unitList = []
        this.projectileList = []
    }
}
