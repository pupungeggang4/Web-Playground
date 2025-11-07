class FieldPlayer extends Unit {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
        this.tempPos = new Vec2(0, 0)
    }

    handleTick(game) {
        this.move(game)
    }

    move(game) {
        this.tempPos.x = this.rect.pos.x
        this.tempPos.y = this.rect.pos.y
        this.rect.pos.x = this.tempPos.x
        this.rect.pos.y = this.tempPos.y
    }

    render(game) {
        Render.strokeRectCenterCam(game.ctx, this.rect, game.field.camera)
    }
}
