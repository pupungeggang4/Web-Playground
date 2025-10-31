class Portal {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {

    }

    render(game) {
        let field = game.battle.field
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.portal, 0, 0)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }

    spawnUnit(game, unit) {
        let field = game.battle.field
        unit.rect.pos = new Vec2(this.rect.pos.x, this.rect.pos.y)
        field.unit.push(unit)
    }
}

class EndPoint {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        let field = game.battle.field
        let player = game.battle.player

        for (let i = field.unit.length - 1; i >= 0; i--) {
            if (field.unit[i].rect.pos.x < -400) {
                field.unit.splice(i, 1)
                player.life -= 1
                if (player.life <= 0) {
                    game.state = 'game_over'
                }
            }
        }
    }

    render(game) {
        let field = game.battle.field
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.portal, 0, 0)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Tower {
    constructor() {
        this.ID = 0
        this.hp = 30
        this.hpMax = 30
        this.attack = 0; this.attackType = 1; this.attackSpeed = 1.0; this.attackCool = 1.0; this.attackRange = []
        this.effect = []
        this.speed = 16.0
    }

    setData(ID) {
        this.ID = ID
    }

    handleTick(game) {

    }

    render(game) {
        
    }
}

class Unit {
    constructor() {
        this.ID = 0
        this.hp = 30
        this.hpMax = 30
        this.attack = 0; this.attackType = 1; this.attackSpeed = 1.0; this.attackCool = 1.0; this.attackRange = []
        this.effect = []
        this.speed = 16.0

        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.frame = 4; this.frameCurrent = 0; this.frameInterval = 0.2; this.frameTime = 0;
        this.frameCoord = [[0, 0], [40, 0], [80, 0], [120, 0]]
    }

    setData(ID) {
        this.ID = ID
    }

    handleTick(game) {
        this.rect.pos.x -= this.speed * game.delta / 1000
    }

    render(game) {
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frame

        let field = game.battle.field
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.unit, this.frameCoord[this.frameCurrent][0], this.frameCoord[this.frameCurrent][1], this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}
