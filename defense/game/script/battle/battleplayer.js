class BattlePlayer {
    constructor() {
        this.level = 0
        this.energy = 0
        this.energyMax = 6
        this.energyGen = 0
        this.life = 0
        this.lifeMax = 20
        this.hand = []
        this.deck = []
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
    }

    handleTick(game) {
        this.energy += this.energyGen * game.delta / 1000
        
        if (this.energy >= this.energyMax) {
            this.energy = this.energyMax
        }
    }

    render(game) {

    }
}