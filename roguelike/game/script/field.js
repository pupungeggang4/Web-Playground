class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new FieldPlayer()
        this.drop = [new Drop(), new Drop()]
        this.proj = []
        this.unit = []
        this.drop[0].type = 'coin'
        this.drop[0].rect = new Rect2(160, 0, 40, 40)
        this.drop[1].type = 'exporb'
        this.drop[1].rect = new Rect2(-160, 0, 40, 40)
    }

    handleTick(game) {
        this.player.handleTick(game)

        for (let i = this.drop.length - 1; i >= 0; i--) {
            this.drop[i].handleTick(game)
        }

        for (let i = this.proj.length - 1; i >= 0; i--) {
            this.proj[i].handleTick(game)
        }

        for (let i = this.unit.length - 1; i >= 0; i--) {
            this.unit[i].handleTick(game)
        }
    }

    render(game) {
        this.player.render(game)

        for (let i = this.drop.length - 1; i >= 0; i--) {
            this.drop[i].render(game)
        }

        for (let i = this.proj.length - 1; i >= 0; i--) {
            this.proj[i].render(game)
        }

        for (let i = this.unit.length - 1; i >= 0; i--) {
            this.unit[i].render(game)
        }
    }
}

class Projectile {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 40
        this.canvas.height = 40
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {

    }

    render(game) {

    }
}

class Drop {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
        this.type = ''
        this.amount = ''
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    setData(type, amount) {
        this.type = type
        this.amount = amount
    }

    handleTick(game) {
    }

    render(game) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (this.type === 'coin') {
            this.ctx.drawImage(Img.coin, 0, 0)
        } else if (this.type === 'exporb') {
            this.ctx.drawImage(Img.exporb, 0, 0)
        }
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, game.field.camera)
    }
}

class Unit {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 40
        this.canvas.height = 40
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        
    }

    render(game) {

    }
}

class FieldPlayer extends Unit {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.tempPos = new Vec2(0, 0)
        this.speed = 320.0
        this.velocity = new Vec2(0, 0)

        this.canvas.width = 80
        this.canvas.height = 80
    }

    handleTick(game) {
        this.move(game)
    }

    move(game) {
        let xPressed = false
        let yPressed = false
        this.tempPos.x = this.rect.pos.x
        this.tempPos.y = this.rect.pos.y
        this.velocity.x = 0
        this.velocity.y = 0
        if (game.keyPressed['left']) {
            xPressed = true
            this.velocity.x -= 1
        }
        if (game.keyPressed['right']) {
            xPressed = true
            this.velocity.x += 1
        }
        if (game.keyPressed['up']) {
            yPressed = true
            this.velocity.y -= 1
        }
        if (game.keyPressed['down']) {
            yPressed = true
            this.velocity.y += 1
        }
        if (xPressed === true && yPressed === true) {
            this.velocity.mul(0.7)
        }
        this.tempPos.x += this.velocity.x * this.speed * game.delta / 1000
        this.tempPos.y += this.velocity.y * this.speed * game.delta / 1000
        this.rect.pos.x = this.tempPos.x
        this.rect.pos.y = this.tempPos.y
    }

    render(game) {
        let ctx = game.ctx
        let camera = game.field.camera
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.player, 0, 0)
        Render.drawCenterCam(ctx, this.canvas, this.rect, camera)
    }
}
