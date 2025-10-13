class Village {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new VillagePlayer()
    }

    render(ctx, game) {
        this.player.render(ctx, this, game)
    }
}

class VillagePlayer {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    render(ctx, village, game) {
        Render.clearCanvas(this.canvas, this.ctx)
        Render.drawImageUI(this.ctx, Img.player, [0, 0])
        Render.drawCenterCam(ctx, this.canvas, this.rect, village.camera)
    }
}
