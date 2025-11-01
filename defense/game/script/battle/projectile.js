class Projectile {
    constructor() {
        this.side = 0
        this.damage = 5
        this.speed = 160.0
        this.velocity = new Vec2(1.0, 0.0)
        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        let field = game.battle.field
        this.rect.pos.x += this.speed * this.velocity.x * game.delta / 1000
        if (this.side === 0) {
            for (let i = 0; i < field.unit.length; i++) {
                if (Vec2.sub(this.rect.pos, field.unit[i].rect.pos).length() < 40) {
                    field.unit[i].hp -= this.damage
                    field.proj.splice(field.proj.indexOf(this), 1)
                }
            }
        }
        if (this.rect.pos.x < -600 || this.rect.pos.x > 600) {
            field.proj.splice(field.proj.indexOf(this), 1)
        }
    }

    render(game) {
        let field = game.battle.field
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'orange'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.drawCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}
