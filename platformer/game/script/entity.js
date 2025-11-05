class Entity {
    constructor() {
    }
}

class Wall extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 160, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        Render.init(this.ctx)
    }

    handleTick(game) {
        //this.support(game)
    }

    support(game, entity) {
        if (entity.ground === false && entity.velocity.y >= 0) {
            let up = Physics.findUpOverlap(this.rect, entity.tempRect)

            if (up > 0) {
                entity.tempRect.pos.y -= up
                entity.velocity.y = 0
                entity.ground = true
            }
        }
    }

    render(game) {
        let field = game.field
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Belt extends Wall {
    constructor() {
        super()
        this.scroll = 120.0
    }

    handelTick(game) {

    }

    support(game, entity) {
        if (entity.ground === false && entity.velocity.y >= 0) {
            let up = Physics.findUpOverlap(this.rect, entity.tempRect)

            if (up > 0) {
                entity.tempRect.pos.y -= up
                entity.velocity.y = 0
                entity.ground = true
                entity.tempRect.pos.x += this.scroll * game.delta / 1000
            }
        }
    }

    render(game) {
        let field = game.field
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Unit extends Entity {
    constructor() {
        super()
    }
}

class PlayerUnit extends Unit {
    constructor() {
        super()
        this.speed = 320.0
        this.gravity = 800.0; this.terminalSpeed = 800.0; this.jumpPower = -600.0;
        this.ground = false
        this.velocity = new Vec2(0, 0)
        this.tempRect = new Rect2(0, 0, 80, 80)

        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = Img.player
    }

    handleTick(game) {
        this.movePlayer(game)
    }

    movePlayer(game) {
        this.ground = false
        this.velocity.x = 0
        this.tempRect.pos.x = this.rect.pos.x
        this.tempRect.pos.y = this.rect.pos.y

        if (game.keyPressed['left'] === true) {
            this.velocity.x -= 1
        }
        if (game.keyPressed['right'] === true) {
            this.velocity.x += 1
        }
        this.velocity.x *= this.speed

        this.velocity.y += this.gravity * game.delta / 1000

        this.tempRect.pos.x += this.velocity.x * game.delta / 1000
        this.tempRect.pos.y += this.velocity.y * game.delta / 1000

        for (let i = 0; i < game.field.mech.length; i++) {
            game.field.mech[i].support(game, this)
        }

        this.rect.pos.x = this.tempRect.pos.x
        this.rect.pos.y = this.tempRect.pos.y
    }

    support(game) {

    }

    jump(game) {
        if (this.ground === true) {
            this.velocity.y = this.jumpPower
            this.ground = false
        }
    }

    render(game) {
        let field = game.field
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Coin extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 40, 40)
        this.frameTime = 0
        this.frames = 4
        this.frameInterval = 200
        this.frameCurrent = 0
        this.frameCoord = [[0, 0], [40, 0], [80, 0], [120, 0]]
    }

    handleTick(game) {
        let player = game.field.player
        let field = game.field
        if (this.rect.overlap(player.rect)) {
            field.unit.splice(field.unit.indexOf(this), 1)
            game.player.coin += 1
        }
    }

    render(game) {
        let field = game.field
        this.frameTime += game.delta
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        Render.renderCenterCamPart(game.ctx, Img.sprite.coin, this.frameCoord[this.frameCurrent], this.rect, field.camera)
    }
}

class Tile extends Entity {
    constructor() {
        super()
    }
}

class TileSet extends Entity {
    constructor() {
        super()
        this.positionStart = new Vec2(0, 0)
        this.cells = []
    }
}
