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

class PlayerUnit extends Unit {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 80, 80)
    }

    render(game) {
        Render.strokeRectCenterCam(game.ctx, this.rect, game.field.camera)
    }
}

class Mech extends Entity {
    constructor() {
        super()
    }
}

class Platform extends Mech {
    constructor() {
        super()
        this.rect = new Rect2(0, 60, 160, 40)
    }
}

class Wall extends Mech {

}

class Belt extends Mech {

}
