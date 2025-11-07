class Entity {
    constructor() {
        this.rect = new Rect2(0, 0, 0, 0)
    }

    render(game) {
        Render.fillRectCenterCam(game.ctx, this.rect, game.field.camera, 'green')
    }
}

class Unit extends Entity {
    constructor() {
        super()
    }
}

