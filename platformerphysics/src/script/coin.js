class Coin extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = Img.sprite.coin
        this.frames = 4; this.frameCurrent = 0; this.frameTime = 0; this.frameInterval = 0.2;
        this.frameCoord = [[0, 0], [40, 0], [80, 0], [120, 0]]
    }

    handleTick(game) {

    }

    render(game) {
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        Render.drawCenterCamPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent], this.rect, game.field.camera)
    }
}
