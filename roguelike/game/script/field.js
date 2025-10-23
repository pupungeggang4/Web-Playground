class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new FieldPlayer()
        this.drop = []
        this.proj = []
        this.unit = []
    }

    handleTick(game) {
        this.player.handleTick(game)
    }

    render(game) {

    }
}

class Unit {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
    }

    handleTick(game) {

    }

    render(game) {

    }
}

class Projectile {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
    }

    handleTick(game) {

    }

    render(game) {

    }
}

class Drop {
    constructor() {
        this.rect = new Rect2(0, 0, 40, 40)
        this.type = ''
        this.amount = ''
    }

    handleTick(game) {

    }

    render(game) {

    }
}

class FieldPlayer extends Unit {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.tempPos = new Vec2(0, 0, 40, 40)
        this.speed = 320.0
    }

    handleTick(game) {

    }

    render(game) {

    }
}