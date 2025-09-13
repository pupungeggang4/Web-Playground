class FieldThing {
    constructor() {
        this.rect = new Rect2(0, 0, 0, 0)
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.renderTime = 0
        this.renderInterval = 0
    }

    renderCanvas(game, image) {
        this.renderTime += game.delta
        this.renderFrame = Math.floor(this.renderTime / this.renderInterval) % this.renderFrameMax
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(image, this.renderSize[0] * this.renderFrames[this.renderFrame][1], this.renderSize[1] * this.renderFrames[this.renderFrame][0], this.renderSize[0], this.renderSize[1], 0, 0, this.renderSize[0], this.renderSize[1])
    }
}

class FieldPlayer extends FieldThing {
    constructor() {
        super()
    }
}

class Collectible extends FieldThing {
    constructor() {
        super()
    }
}

class Coin extends Collectible {
    constructor() {
        super()
        this.rect = new Rect2(40, 40, 40, 40)
        this.canvas.width = 40
        this.canvas.height = 40

        this.renderTime = 0
        this.renderInterval = 200
        this.renderFrame = 0
        this.renderFrames = [[0, 0], [0, 1], [0, 2], [0, 3]]
        this.renderSize = [40, 40]
        this.renderFrameMax = 4
    }

    render(game, ctx, field) {
        this.renderCanvas(game, img.sprite.coin)
        Render.renderCenterCam(ctx, this.canvas, this.rect, field.camera)
    }
}
