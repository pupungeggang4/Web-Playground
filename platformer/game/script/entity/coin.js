class Coin extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 40, 40)

        this.canvas = Img.sprite.coin
        this.frameTime = 0
        this.frames = 4
        this.frameInterval = 200
        this.frameCurrent = 0
        this.frameCoord = [[0, 0], [40, 0], [80, 0], [120, 0]]

        this.rigid = false
        this.floor = false
        this.fall = false
    }

    handleTick(game) {
        let player = game.field.player
        let field = game.field
        if (this.rect.overlap(player.rect)) {
            field.entityList.splice(field.entityList.indexOf(this), 1)
            game.player.coin += 1
        }
    }

    render(game) {
        let field = game.field
        this.frameTime += game.delta
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        Render.renderCenterCamPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent], this.rect, field.camera)
    }
}
