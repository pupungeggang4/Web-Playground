class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.unitList = []
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