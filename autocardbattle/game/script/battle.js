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
        this.hp = 0
        this.hpMax = 0
        this.crystal = []
        this.crystalDeck = []
        this.card = []
        this.deck = []
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
    }

    generateDeck(characterID) {
        this.deck = []
        for (let i = 0; i < dataCharacter[characterID]['deck'].length; i++) {
            let card = new Card()
            card.setData(dataCharacter[characterID]['deck'][i])
            this.deck.push(card)
        }

        for (let i = 0; i < dataCharacter[characterID]['crystal'].length; i++) {
            let crystal = new Crystal()
        }
    }
}
