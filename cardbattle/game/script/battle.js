class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.field = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ]
    }
}

class BattlePlayer {
    constructor() {
        this.life = 0
        this.lifeMax = 0
        this.energy = 0
        this.energyMax = 0
        this.exp = 0
        this.level = 0
    }
}
