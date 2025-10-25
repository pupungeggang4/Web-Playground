class Entity {
    constructor() {
    }
}

class Wall extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        Render.init(this.ctx)
    }

    render(game) {
        let field = game.field
        Render.clearCanvas(this.canvas, this.ctx)
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
        this.gravity = 800.0; this.terminalSpeed = 800.0;
        this.velocity = new Vec2(0, 0)
        this.tempPosition = new Vec2(0, 0)

        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
        Render.init(this.ctx)
    }

    handleTick(game) {
        this.movePlayer(game)
    }

    movePlayer(game) {
        this.velocity.x = 0
        this.tempPosition.x = this.rect.pos.x
        this.tempPosition.y = this.rect.pos.y

        if (game.keyPressed['left'] === true) {
            this.velocity.x -= 1
        }
        if (game.keyPressed['right'] === true) {
            this.velocity.x += 1
        }
        this.velocity.x *= this.speed

        this.velocity.y += this.gravity * game.delta / 1000
        this.tempPosition.x += this.velocity.x * game.delta / 1000
        this.tempPosition.y += this.velocity.y * game.delta / 1000

        this.rect.pos.x = this.tempPosition.x
        this.rect.pos.y = this.tempPosition.y
    }

    render(game) {
        let field = game.field
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.drawImage(Img.player, 0, 0)
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Coin extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.animationTime = 0
        this.animationFrame = 4
        this.animationInterval = 200
        this.currentFrame = 0
        this.animationCoord = [[0, 0], [40, 0], [80, 0], [120, 0]]
    }

    handleTick(game) {
        let player = game.field.player
        let field = game.field
        if (this.rect.overlap(player.rect)) {
            field.entity.splice(field.entity.indexOf(this), 1)
            game.player.coin += 1
        }
    }

    render(game) {
        let field = game.field
        this.animationTime += game.delta
        this.currentFrame = Math.floor(this.animationTime / this.animationInterval) % this.animationFrame
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.sprite.coin,
            this.animationCoord[this.currentFrame][0], this.animationCoord[this.currentFrame][1], this.canvas.width, this.canvas.height,
            0, 0, this.canvas.width, this.canvas.height
        )
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
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
