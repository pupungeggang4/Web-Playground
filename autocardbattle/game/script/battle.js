class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.field = new BattleField()
        this.enemy = new BattlePlayer()
    }
}

class BattlePlayer {
    constructor() {
        this.hp = 0
        this.hpMax = 0
        this.crystal = []
        this.crystalDeck = []
        this.card = []
        this.deck = []
    }
}

class BattleField {

}
