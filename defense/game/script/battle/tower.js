class Tower {
    constructor() {
        this.ID = 1
        this.energy = 0
        this.hp = 50
        this.hpMax = 50
        this.attack = 5; this.attackType = 1; this.attackSpeed = 1.0; this.attackCool = 1.0; this.attackRange = []
        this.effect = []
        this.side = 0

        this.rect = new Rect2(-320, -120, 80, 80)
    }

    setData(ID) {
        this.ID = ID
    }

    handleTick(game) {
        let field = game.battle.field
        if (this.attackCool <= 0) {
            let proj = new Projectile()
            proj.velocity = new Vec2(1.0, 0.0)
            proj.rect.pos = new Vec2(this.rect.pos.x, this.rect.pos.y)
            field.proj.push(proj)
            this.attackCool = 1 / this.attackSpeed
        } else {
            this.attackCool -= game.delta / 1000
        }
    }

    render(game) {
        let field = game.battle.field
        Render.drawCenterCam(game.ctx, Img.tower, this.rect, field.camera)
    }

    toCard() {
        let card = new Card()
        card.ID = this.ID
        let data = JSON.parse(JSON.stringify(Data.card[this.ID]))
        card.name = data['name']
        card.type = 'unit'
        card.element = data['element']
        card.energy = data['energy']
        card.stat = data['stat']
        card.effect = data['effect']
        return card
    }
}