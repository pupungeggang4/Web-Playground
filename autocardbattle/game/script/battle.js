class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattlePlayer()
        this.field = [null, null, null, null, null, null, null, null, null, null]
        this.turn = 0
        this.turnWho = 0
        this.turnPhase = 'start'
        this.nextProceedTime = 500
        this.paused = true
    }

    handleTick(game) {
        if (this.paused === false) {
            if (this.nextProceedTime < 0) {
                this.nextProceedTime = 500
                this.proceed(game)
            } else {
                this.nextProceedTime -= game.delta
            }
        }
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
        this.turnPhase = 'start'
    }

    proceed(game) {
        if (this.turnPhase === 'start') {
            if (this.turnWho === 0) {
                this.turn += 1
                this.player.startTurn()
            } else {
                this.enemy.startTurn()
            }
            this.turnPhase = 'play'
        } else if (this.turnPhase === 'play') {
            this.turnPhase = 'battle'
        } else if (this.turnPhase === 'battle') {
            this.turnPhase = 'end'
        } else if (game.battle.turnPhase === 'end') {
            if (this.turnWho === 0) {
                this.player.endTurn()
                this.turnWho = 1
            } else {
                this.enemy.endTurn()
                this.turnWho = 0
            }
            this.turnPhase = 'start'
        }
    }
}

class BattlePlayer {
    constructor() {
        this.crystalNum = 0
        this.crystalDeck = []
        this.crystalHand = []
        this.deck = []
        this.acceler = 0
        this.extraEnergy = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
        this.side = 0
    }

    startBattlePlayer(player) {
        this.crystalNum = 0
        this.acceler = 0
        this.extraEnergy = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0

        this.deck = []
        this.crystalDeck = []
        this.crystalHand = []

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

        while (crystalDeckList.length > 0) {
            let index = Math.floor(Math.random() * crystalDeckList.length)
            this.crystalDeck.push(crystalDeckList.splice(index, 1)[0])
        }
    }

    startBattleEnemy(ID) {
        this.crystalNum = 0
        this.acceler = 0
        this.extraEnergy = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0

        this.deck = []
        this.crystalDeck = []
        this.crystalHand = []
        this.attackStack = []
        let deckList = []
        let crystalDeckList = []

        let data = JSON.parse(JSON.stringify(dataEnemy[ID]))

        for (let i = 0; i < data['deck'].length; i++) {
            let card = new Card()
            card.setData(data['deck'][i])
            deckList.push(card)
        }

        for (let i = 0; i < data['crystal'].length; i++) {
            let crystal = new Crystal()
            crystal.setData(data['crystal'][i])
            crystalDeckList.push(crystal)
        }

         while (deckList.length > 0) {
            let index = Math.floor(Math.random() * deckList.length)
            this.deck.push(deckList.splice(index, 1)[0])
        }

        while (crystalDeckList.length > 0) {
            let index = Math.floor(Math.random() * crystalDeckList.length)
            this.crystalDeck.push(crystalDeckList.splice(index, 1)[0])
        }
    }

    startTurn() {
        if (this.crystalNum < 8) {
            this.crystalNum += 1
        }

        this.drawCrystal(this.crystalNum)
    }

    playCard() {
        if (this.deck.length > 0) {
            let top = this.deck[0]
        }
    }

    battle() {

    }

    endTurn() {
    }

    drawCrystal(num) {
        for (let i = 0; i < num; i++) {
            if (this.crystalDeck.length > 0) {
                this.crystalHand.push(this.crystalDeck.shift())
            }
        }
    }
}
