class Wall extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 160, 40)
        this.textureStep = new Vec2(40, 40)
        this.canvas = Img.texture.stone

        this.rigid = true
        this.floor = true
        this.fixed = true
    }

    handleTick(game) {
        //this.support(game)
    }

    support(game, entity) {
    }

    render(game) {
        let field = game.field
        Render.renderTextureCenterCam(game.ctx, this.canvas, this.textureStep, this.rect, field.camera)
    }
}
