class Portal extends Entity {
    constructor() {
        super()
        this.destination = ''
        this.rect = new Rect2(0, 0, 80, 80)
        this.warpPos = new Vec2(0, 0)
        this.canvas = Img.portal
    }

    render(game) {
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, game.field.camera)
    }
}