class BattlePlayer {
    constructor() {
        this.level = 0
        this.upgradeEnergy = 3
        this.energy = 0
        this.energyMax = 6
        this.energyGen = 0
        this.life = 0
        this.lifeMax = 20
        this.hand = []
        this.deck = []
        this.deckUsed = []
        this.drawCool = 4
        this.drawInterval = 4
    }

    startBattle(game) {
        this.level = 1
        this.energy = 3
        this.energyMax = 6
        this.energyGen = 1
        this.life = 20
        this.lifeMax = 20

        this.deck = game.battle.tempDeck
        this.hand = []
        this.deckUsed = []
    }

    handleTick(game) {
        this.energy += this.energyGen * game.delta / 1000
        
        if (this.energy >= this.energyMax) {
            this.energy = this.energyMax
        }

        this.handleDraw(game)
    }

    handleDraw(game) {
        if (this.drawCool <= 0) {
            if (this.deck.length > 0) {
                this.hand.push(this.deck.shift())
            } else {
                while (this.deckUsed.length > 0) {
                    let index = Math.floor(Math.random() * this.deckUsed.length)
                    let temp = this.deckUsed.splice(index, 1)[0]
                    this.deck.push(temp)
                }
                if (this.deck.length > 0) {
                    this.hand.push(this.deck.shift())
                }
            }
            this.drawCool = this.drawInterval
        } else {
            this.drawCool -= game.delta / 1000
        }
    }

    upgrade(game) {
        if (this.energy >= this.upgradeEnergy) {
            this.energy -= this.upgradeEnergy
            this.level += 1
            this.energyGen += 0.2
            this.energyMax += 2
        }
    }

    playCard(game, i, j, handIndex) {
        let field = game.battle.field
        if (handIndex >= this.hand.length) {
            return
        }
        let card = this.hand[handIndex]
        if (this.energy >= card.energy) {
            if (card.type === 'unit') {
                if (field.layout[i][j] === null) {
                    let tower = card.toTower()
                    field.addTower(game, i, j, tower)
                    this.energy -= card.energy
                    this.hand.splice(handIndex, 1)
                }
            }
        }
    }

    render(game) {

    }
}