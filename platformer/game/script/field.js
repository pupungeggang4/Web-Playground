class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entity = []
    }

    handleTick(ctx, game) {
        this.player.handleTick(this, game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y
    }

    render(ctx, game) {
        this.player.render(ctx, this, game)
    }
}
