class Projectile {
    constructor() {
        this.side = 0
        this.damage = 5
        this.speed = 160.0
        this.velocity = new Vec2(1.0, 0.0)
        this.rect = new Rect2(0, 0, 40, 40)
    }

    handleTick(game) {
        let field = game.battle.field
        this.rect.pos.x += this.speed * this.velocity.x * game.delta / 1000
        if (this.side === 0) {
            for (let i = 0; i < field.unitEnemy.length; i++) {
                if (Vec2.sub(this.rect.pos, field.unitEnemy[i].rect.pos).length() < 40) {
                    field.unitEnemy[i].hp -= this.damage
                    field.proj.splice(field.proj.indexOf(this), 1)
                    break
                }
            }
        }
        if (this.rect.pos.x < -600 || this.rect.pos.x > 600) {
            field.proj.splice(field.proj.indexOf(this), 1)
        }
    }

    render(game) {
        let field = game.battle.field
        Render.drawCenterCam(game.ctx, Img.projectile, this.rect, field.camera)
    }
}
