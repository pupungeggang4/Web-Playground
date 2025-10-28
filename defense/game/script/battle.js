class Battle {
    constructor() {
        this.tempDeck = []
        this.level = new Level()
        this.player = new BattlePlayer()
        this.field = new Field()
    }
}

class Field {
    constructor() {
        this.unit = []
        this.proj = []
        this.tower = []
    }
}

class BattlePlayer {
    constructor() {
        this.level = 0
        this.energy = 0
        this.energyMax = 8
        this.energyGen = 0
        this.life = 0
        this.lifeMax = 20
        this.hand = []
        this.deck = []
    }
}
