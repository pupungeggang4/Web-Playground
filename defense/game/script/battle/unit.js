class Unit {
    constructor() {
        this.ID = 0
        this.hp = 30
        this.hpMax = 30
        this.attack = 3; this.attackType = 1; this.attackSpeed = 1.0; this.attackCool = 1.0; this.attackRange = []
        this.state = 'move'; this.attackTarget = null;
        this.effect = []
        this.speed = 64.0

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
        let field = game.battle.field
        if (this.attackType === 1) {
            this.state = 'move'
            for (let i = 0; i < field.unitPlayer.length; i++) {
                let unit = field.unitPlayer[i]
                if (Rect2.simpleCollide(this.rect, unit.rect)) {
                    this.attackTarget = unit
                    this.state = 'attack'
                    break
                }
            }
        }
        if (this.state === 'move') {
            this.rect.pos.x -= this.speed * game.delta / 1000
        } else if (this.state === 'attack') {
            if (this.attackCool <= 0) {
                if (this.attackTarget != null) {
                    this.attackTarget.hp -= this.attack
                }
                this.attackCool = 1.0 / this.attackSpeed
            } else {
                this.attackCool -= game.delta / 1000
            }
        }
        if (this.hp <= 0) {
            field.unitEnemy.splice(field.unitEnemy.indexOf(this), 1)
        }
    }

    render(game) {
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frame

        let field = game.battle.field
        Render.drawCenterCamPart(game.ctx, Img.unit, this.frameCoord[this.frameCurrent], this.rect, field.camera)
        game.ctx.fillStyle = 'green'
        let rPos = Render.findScreenCoord(this.rect, field.camera)
        game.ctx.fillRect(rPos[0], rPos[1], this.hp / this.hpMax * this.rect.size.x, 6)
        game.ctx.fillStyle = 'black'
    }
}
