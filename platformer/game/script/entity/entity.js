class Entity {
    constructor() {
        this.rigid = false
        this.floor = false
        this.fixed = false
    }
}

class Tile extends Entity {
    constructor() {
        super()
    }
}

class TileSet extends Entity {
    constructor() {
        super()
        this.positionStart = new Vec2(0, 0)
        this.cells = []
    }
}
