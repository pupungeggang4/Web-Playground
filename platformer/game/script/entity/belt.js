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
        Render.renderTextureCenterCam(game.ctx, this.canvas, this.textureStep, this.rect, field.camera)
    }
}
