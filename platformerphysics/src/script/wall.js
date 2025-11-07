class Wall extends Entity {
    constructor() {
        super()
        this.canvas = Img.texture.stone
        this.renderStep = new Vec2(40, 40)
    }

    render(game) {
        Render.drawCenterCamRepeat(game.ctx, this.canvas, this.renderStep, this.rect, game.field.camera)
    }
}
