class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new FieldPlayer()
        this.drop = []
        this.proj = []
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
        this.side = 0
        this.damage = 10
        this.lifeTime = 1.0
        this.effect = []

        this.rect = new Rect2(0, 0, 40, 40)
        this.speed = 640.0
        this.direction = new Vec2(1.0, 0.0)

        this.canvas = Img.projectile
    }

    handleTick(game) {
        this.move(game)
        this.handleLifeTime(game)
        this.handleCollision(game)
    }

    move(game) {
        this.rect.pos.x += this.speed * this.direction.x * game.delta / 1000
        this.rect.pos.y += this.speed * this.direction.y * game.delta / 1000
    }

    handleLifeTime(game) {
        let field = game.field
        if (this.lifeTime <= 0) {
            field.proj.splice(field.proj.indexOf(this), 1)
        } else {
            this.lifeTime -= game.delta / 1000
        }
    }

    handleCollision(game) {
        let field = game.field
        for (let i = 0; i < field.unit.length; i++) {
            if (Vec2.distance(this.rect.pos, field.unit[i].rect.pos) < 60) {
                field.unit[i].hp -= this.damage
                field.proj.splice(field.proj.indexOf(this), 1)
                break
            }
        }
    }

    render(game) {
        let field = game.field
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
        this.canvas = Img.unit
        this.frames = 4; this.frameCurrent = 0; this.frameInterval = 0.5; this.frameTime = 0;
        this.frameCoord = [[0, 0], [80, 0], [160, 0], [240, 0]]

        this.hp = 30
        this.hpMax = 30
        this.speed = 200.0
        this.gold = 10
        this.exp = 10
    }

    handleTick(game) {
        this.handleDeath(game)
    }

    handleDeath(game) {
        let field = game.field
        if (this.hp <= 0) {
            field.unit.splice(field.unit.indexOf(this), 1)
            let drop = new Drop()
            drop.setData('coin', this.gold)
            drop.rect.pos = new Vec2(this.rect.pos.x + Math.random() * 20 - 10, this.rect.pos.y + Math.random() * 20 - 10)
            field.drop.push(drop)
            drop = new Drop()
            drop.setData('exporb', this.exp)
            drop.rect.pos = new Vec2(this.rect.pos.x + Math.random() * 20 - 10, this.rect.pos.y + Math.random() * 20 - 10)
            field.drop.push(drop)
        }
    }

    render(game) {
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        Render.drawCenterCamPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent], this.rect, game.field.camera)
        let tl = Render.findTopLeft(this.rect, game.field.camera)
        game.ctx.fillStyle = 'green'
        game.ctx.fillRect(tl[0], tl[1], this.hp / this.hpMax * 80, 10)
        game.ctx.fillStyle = 'black'
    }
}

class FieldPlayer extends Unit {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.tempPos = new Vec2(0, 0)
        this.speed = 320.0; this.speedDash = 1200.0
        this.velocity = new Vec2(0, 0)
        this.canvas = Img.player

        this.hp = 0
        this.hpMax = 0
        this.energy = 0
        this.energyMax = 0
        this.exp = 0; this.expMax = 0; this.level = 0; this.gold = 0
        this.attack = 10; this.attackSpeed = 1.0; this.attackCoolLeft = 1.0;
        this.dashCool = 1.5; this.dashCoolLeft = 1.5; this.dashTime = 0.2; this.dashTimeLeft = 0.2;
        this.weapon = new Weapon()
    }

    handleTick(game) {
        this.move(game)
        this.handleAttackCool(game)
    }

    dash(game) {
        if (this.dashCoolLeft <= 0) {
            this.dashCoolLeft = this.dashCool
            this.dashTimeLeft = this.dashTime
        }
    }

    handleAttackCool(game) {
        if (this.attackCoolLeft <= 0) {

        } else {
            this.attackCoolLeft -= game.delta / 1000
        }
    }

    shoot(game, pos) {
        let field = game.field
        if (this.attackCoolLeft <= 0) {
            if (Vec2.distance(this.rect.pos, pos) >= 10) {
                let diffN = Vec2.sub(pos, this.rect.pos).normalized()
                let proj = new Projectile()
                proj.rect.pos.x = this.rect.pos.x
                proj.rect.pos.y = this.rect.pos.y
                proj.direction = diffN
                proj.damage = this.attack * this.weapon.attackMul
                this.attackCoolLeft = 1 / (this.attackSpeed * this.weapon.attackSpeed)
                field.proj.push(proj)
            }
        }
    }

    move(game) {
        let xPressed = false
        let yPressed = false
        this.tempPos.x = this.rect.pos.x
        this.tempPos.y = this.rect.pos.y
        this.velocity.x = 0
        this.velocity.y = 0
        let speed = this.speed
        if (this.dashTimeLeft >= 0) {
            speed = this.speedDash
            this.dashTimeLeft -= game.delta / 1000
        } else {
            if (this.dashCoolLeft >= 0) {
                this.dashCoolLeft -= game.delta / 1000
            }
        }
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
        this.tempPos.x += this.velocity.x * speed * game.delta / 1000
        this.tempPos.y += this.velocity.y * speed * game.delta / 1000
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
        Render.drawCenterCam(ctx, this.canvas, this.rect, camera)
    }
}
