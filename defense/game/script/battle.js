class Battle {
    constructor() {
        this.tempDeck = []
        this.level = new Level()
        this.player = new BattlePlayer()
        this.field = new Field()
    }

    handleTick(game) {
        this.level.handleTick(game)
        this.player.handleTick(game)
        this.field.handleTick(game)
    }

    render(game) {
        this.field.render(game)
    }
}

class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.unit = []
        this.proj = []
        this.tower = []
    }

    handleTick(game) {
        
    }

    render(game) {

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

    handleTick(game) {

    }

    render(game) {

    }
}
