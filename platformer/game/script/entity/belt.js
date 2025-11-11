class Belt extends Wall {
    constructor() {
        super()
        this.canvas = Img.sprite.belt
        this.frameTime = 0
        this.frames = 4
        this.frameInterval = 0.2
        this.frameCurrent = 0
        this.frameCoord = [
            [0, 0], [40, 0], [80, 0], [120, 0],
            [0, 40], [40, 40], [80, 40], [120, 40],
            [0, 80], [40, 80], [80, 80], [120, 80]
        ]
        this.scroll = 120.0
    }

    handelTick(game) {

    }

    support(game, entity) {
        entity.rect.pos.x += this.scroll * game.delta / 1000
    }

    render(game) {
        let field = game.field
        this.frameTime += game.delta / 1000
        this.frameCurrent = Math.floor(this.frameTime / this.frameInterval) % this.frames
        if (this.scroll < 0) {
            this.frameCurrent = this.frames - this.frameCurrent - 1
        }
        let num = Math.floor(this.rect.size.x / 40)
        let start = [this.rect.pos.x - this.rect.size.x / 2 - field.camera.pos.x + field.camera.size.x / 2, this.rect.pos.y - this.rect.size.y / 2 - field.camera.pos.y + field.camera.size.y / 2]
        for (let i = 0; i < num; i++) {
            if (i == 0) {
                Render.renderPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent + 4], this.textureStep, [start[0] + this.textureStep.x * i, start[1]])
            } else if (i == num - 1) {
                Render.renderPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent + 8], this.textureStep, [start[0] + this.textureStep.x * i, start[1]])
            } else {
                Render.renderPart(game.ctx, this.canvas, this.frameCoord[this.frameCurrent], this.textureStep, [start[0] + this.textureStep.x * i, start[1]])
            }
        }
    }
}
