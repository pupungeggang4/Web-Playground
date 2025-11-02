class Portal {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
    }

    handleTick(game) {

    }

    render(game) {
        let field = game.battle.field
        Render.drawCenterCam(game.ctx, Img.portal, this.rect, field.camera)
    }

    spawnUnit(game, unit) {
        let field = game.battle.field
        unit.rect.pos = new Vec2(this.rect.pos.x, this.rect.pos.y)
        field.unitEnemy.push(unit)
    }
}

class EndPoint {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
    }

    handleTick(game) {
        let field = game.battle.field
        let player = game.battle.player

        for (let i = field.unitEnemy.length - 1; i >= 0; i--) {
            if (field.unitEnemy[i].rect.pos.x < -400) {
                field.unitEnemy.splice(i, 1)
                player.life -= 1
                if (player.life <= 0) {
                    game.state = 'game_over'
                }
            }
        }
    }

    render(game) {
        let field = game.battle.field
        Render.drawCenterCam(game.ctx, Img.portal, this.rect, field.camera)
    }
}