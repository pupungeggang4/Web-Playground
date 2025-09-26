class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattlePlayer()
        this.field = [null, null, null, null, null, null, null, null, null, null]
        this.turn = 0
        this.turnWho = 0
    }

    startBattle(game) {
        this.player.startBattlePlayer(game.player)
        this.enemy.startBattleEnemy(1)

        let unit = new Unit()
        unit.setUnitFromPlayer(game.player)
        this.field[0] = unit
        let unitEnemy = new Unit()
        unitEnemy.setUnitFromEnemy(1)
        this.field[5] = unitEnemy
    }
}

class BattlePlayer {
    constructor() {
        this.crystalNum = 0
        this.crystalDeck = []
        this.deck = []
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
    }

    startBattlePlayer(player) {
        this.deck = []
        this.crystalDeck = []

        let deckList = []
        let crystalDeckList = []

        for (let i = 0; i < player.deck.length; i++) {
            deckList.push(player.deck[i].clone())
        }

        for (let i = 0; i < player.crystalDeck.length; i++) {
            crystalDeckList.push(player.crystalDeck[i].clone())
        }

        while (deckList.length > 0) {
            let index = Math.floor(Math.random() * deckList.length)
            this.deck.push(deckList.splice(index, 1)[0])
        }

        while (crystalDeckList > 0) {
            let index = Math.floor(Math.random() * crystalDeckList.length)
            this.crystalDeck.push(crystalDeckList.splice(index, 1)[0])
        }
    }

    startBattleEnemy(ID) {
        this.deck = []
        this.crystalDeck = []

        let data = JSON.parse(JSON.stringify(dataEnemy[ID]))

        for (let i = 0; i < data['deck'].length; i++) {
            let card = new Card()
            card.setData(data['deck'][i])
            this.deck.push(card)
        }

        for (let i = 0; i < data['crystal'].length; i++) {
            let crystal = new Crystal()
            crystal.setData(data['crystal'][i])
            this.crystalDeck.push(crystal)
        }
    }
}
