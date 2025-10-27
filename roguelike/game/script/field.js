class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new FieldPlayer()
        this.drop = []
        this.proj = [new Projectile()]
        this.unit = [new Unit()]
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
        this.dmg = 10
        this.effect = []

        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {

    }

    render(game) {
        let field = game.field
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.projectile, 0, 0)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}

class Drop {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
        this.type = ''
        this.amount = 0
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    setData(type, amount) {
        this.type = type
        this.amount = amount
    }

    handleTick(game) {
        let player = game.field.player
        if (Vec2.distance(this.rect.pos, player.rect.pos) < 60) {
            if (this.type === 'coin') {
                player.gold += this.amount
            } else if (this.type === 'exporb') {
                player.exp += this.amount
                if (player.exp >= player.expMax) {
                    player.level += 1
                    player.exp -= player.expMax
                    player.expMax = (player.level + 1) * 10
                }
            }
            game.field.drop.splice(game.field.drop.indexOf(this), 1)
        }
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
        this.rect = new Rect2(200, -200, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.frames = 4; this.frameCurrent = 0; this.frameInterval = 0.5; this.frameTime = 0;
        this.frameCoord = [[0, 0], [80, 0], [160, 0], [240, 0]]
    }

    handleTick(game) {
        
    }

    render(game) {
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.unit, this.frameCoord[this.frameCurrent][0], this.frameCoord[this.frameCurrent][1], this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, game.field.camera)
    }
}

class FieldPlayer extends Unit {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.tempPos = new Vec2(0, 0)
        this.speed = 320.0
        this.velocity = new Vec2(0, 0)

        this.hp = 0
        this.hpMax = 0
        this.energy = 0
        this.energyMax = 0
        this.exp = 0
        this.expMax = 0
        this.level = 0
        this.gold = 0

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

    startBattle(game) {
        this.hp = 120
        this.hpMax = 120
        this.level = 1
        this.energy = 0
        this.energyMax = 8
        this.exp = 0
        this.expMax = 20
        this.gold = 50
    }

    render(game) {
        let ctx = game.ctx
        let camera = game.field.camera
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(Img.player, 0, 0)
        Render.drawCenterCam(ctx, this.canvas, this.rect, camera)
    }
}
