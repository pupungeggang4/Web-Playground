class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattlePlayer()
        this.field = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.turn = 0
        this.turnWho = 0
    }
}

class BattlePlayer {
    constructor() {
        this.crystalNum = 0
        this.crystalHnad = []
        this.crystalDeck = []
        this.card = []
        this.deck = []
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
    }

    generateDeck(player) {

    }

    startTurn(battle) {

    }

    playCard(battle) {

    }

    handleUnit(battle, turnWho) {

    }
}
