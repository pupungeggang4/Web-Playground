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

        this.solid = true
        this.floor = true
        this.fall = false
    }

    handleTick(game) {
        //this.support(game)
    }

    support(game, entity) {
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
        entity.rect.pos.x += this.scroll * game.delta / 1000
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
        this.rect = new Rect2(0, 0, 80, 80)
    }

    handleCollideX(game) {
        let field = game.field
        for (let i = 0; i < field.entityList.length; i++) {
            let entity = field.entityList[i]
            if (this != entity && entity.solid === true) {
                let left = Physics.checkCollisionLeft(entity.rect, this.rect)
                if (left > 0) {
                    this.rect.pos.x -= left
                    break
                }
                let right = Physics.checkCollisionRight(entity.rect, this.rect)
                if (right > 0) {
                    this.rect.pos.x += right
                    break
                }
            }
        }
    }

    handleFall(game) {
        let field = game.field
        for (let i = 0; i < field.entityList.length; i++) {
            let entity = field.entityList[i]
            if (this != entity && (entity.solid === true || entity.floor === true)) {
                let up = Physics.checkCollisionUp(entity.rect, this.rect)
                if (up > 0) {
                    this.rect.pos.y -= up
                    this.velocity.y = 0
                    this.ground = true
                    entity.support(game, this)
                    break
                }
            }
        }
    }

    handleCollideUp(game) {
        let field = game.field
        for (let i = 0; i < field.entityList.length; i++) {
            let entity = field.entityList[i]
            if (this != entity && entity.solid === true) {
                let down = Physics.checkCollisionDown(entity.rect, this.rect)
                if (down > 0) {
                    this.rect.pos.y += down
                    this.velocity.y = 0
                    break
                }
            }
        }
    }
}

class PlayerUnit extends Unit {
    constructor() {
        super()
        this.speed = 320.0
        this.gravity = 1200.0; this.terminalSpeed = 800.0; this.jumpPower = -600.0;
        this.ground = false
        this.velocity = new Vec2(0, 0)
        this.tempRect = new Rect2(0, 0, 80, 80)

        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = Img.player

        this.solid = false
        this.floor = false
        this.fall = false
    }

    handleTick(game) {
        this.movePlayer(game)
    }

    movePlayer(game) {
        this.ground = false

        this.velocity.x = 0
        if (game.keyPressed['left'] === true) {
            this.velocity.x -= 1
        }
        if (game.keyPressed['right'] === true) {
            this.velocity.x += 1
        }
        this.velocity.x *= this.speed
        this.rect.pos.x += this.velocity.x * game.delta / 1000
        this.handleCollideX(game)

        if (this.velocity.y < this.terminalSpeed) {
            this.velocity.y += this.gravity * game.delta / 1000
        }
        this.rect.pos.y += this.velocity.y * game.delta / 1000
        this.handleFall(game)
        this.handleCollideUp(game)
    }

    jump(game) {
        if (true) {
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

        this.solid = false
        this.floor = false
        this.fall = false
    }

    handleTick(game) {
        let player = game.field.player
        let field = game.field
        if (this.rect.overlap(player.rect)) {
            field.entityList.splice(field.entityList.indexOf(this), 1)
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
