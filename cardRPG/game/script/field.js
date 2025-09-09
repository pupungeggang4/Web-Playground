class Field {
    constructor() {
        this.player = new PlayerField()
        this.camera = new Camera2()
    }

    handleTick(game) {
        this.player.handleTick(game)
    }
}

class Camera2 {
    constructor() {
        this.rect = new Rect2(0, 0, 1280, 720)
    }
}

class PlayerField {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
    }

    handleTick(game) {

    }

    render(game, field) {
        Render.strokeRectCenterCam(game.ctx, this.rect, field.camera.rect)
    }
}
