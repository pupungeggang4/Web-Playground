class Field {
    constructor() {
        this.player = new PlayerField()
        this.camera = new Rect2(0, 0, 1280, 720)
    }
}

class Camera2 {
    constructor() {

    }
}

class PlayerField {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
    }

    render(game, ctx, field) {
        Render.strokeRectCenterCam(ctx, this.rect, field.camera)
    }
}
