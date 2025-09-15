class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.field = new BattleField()
    }
}

class BattlePlayer {
    constructor() {
        this.hand = []
        this.deck = []
        this.crystal = []
        this.crystalDeck = []
    }
}

class BattleField {
    constructor() {

    }
}
