class Entity {
    constructor() {
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
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
        Render.init(this.ctx)
    }

    handleTick(field, game) {

    }

    render(ctx, field, game) {
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.drawImage(Img.player, 0, 0)
        Render.renderCenterCam(ctx, this.canvas, this.rect, field.camera)
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
    }
}
