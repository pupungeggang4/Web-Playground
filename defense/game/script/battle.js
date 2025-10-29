class Battle {
    constructor() {
        this.tempDeck = []
        this.level = new Level()
        this.player = new BattlePlayer()
        this.field = new Field()
    }

    startBattle(game) {
        this.field.startBattle(game)
        this.player.startBattle(game)
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
        this.portal = []
        this.endPoint = []

        this.rect = new Rect2(0, 0, 880, 320)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')

        for (let i = 0; i < 4; i++) {
            let tempPortal = new Portal()
            tempPortal.rect.pos.x = 400
            tempPortal.rect.pos.y = -120 + 80 * i
            this.portal.push(tempPortal)

            let tempEndPoint = new EndPoint()
            tempEndPoint.rect.pos.x = -400
            tempEndPoint.rect.pos.y = -120 + 80 * i
            this.endPoint.push(tempEndPoint)
        }
    }

    startBattle(game) {
        this.unit = []
        this.proj = []
        this.tower = []
    }

    handleTick(game) {
        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].handleTick(game)
        }

        for (let i = 0; i < this.endPoint.length; i++) {
            this.endPoint[i].handleTick(game)
        }
    }

    render(game) {
        this.ctx.clearRect(0, 0, 880, 320)

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 11; j++) {
                let rect = [j * 80, i * 80, 80, 80]
                Render.strokeRectUI(this.ctx, rect)
            }
        }

        Render.drawCenterCam(game.ctx, this.canvas, this.rect, this.camera)

        for (let i = 0; i < this.portal.length; i++) {
            this.portal[i].render(game)
        }

        for (let i = 0; i < this.endPoint.length; i++) {
            this.endPoint[i].render(game)
        }

        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].render(game)
        }
    }
}

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
