class WindowMenu {
    constructor() {
        this.canvasStatic = document.createElement('canvas')
        this.canvasStatic.width = 1280
        this.canvasStatic.height = 720
        this.ctxStatic = this.canvasStatic.getContext('2d')
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
    }

    renderStatic() {
        Render.init(this.ctxStatic)
        Render.clearCanvas(this.canvasStatic, this.ctxStatic)
        this.ctxStatic.fillStyle = 'white'
        Render.fillRectUI(this.ctxStatic, UI.menu.rect)
        Render.strokeRectUI(this.ctxStatic, UI.menu.rect)
        this.ctxStatic.fillStyle = 'black'
        Render.fillTextUI(this.ctxStatic, game.locale.paused, UI.menu.textPaused)
        Render.strokeRectUI(this.ctxStatic, UI.menu.buttonResume)
        Render.fillTextUI(this.ctxStatic, game.locale.resume, UI.menu.textResume)
        Render.strokeRectUI(this.ctxStatic, UI.menu.buttonExit)
        Render.fillTextUI(this.ctxStatic, game.locale.exit, UI.menu.textExit)
    }

    render(game) {
        Render.init(this.ctx)
        Render.clearCanvas(this.canvas, this.ctx)
        this.ctx.drawImage(this.canvasStatic, 0, 0)
        Render.drawImageUI(this.ctx, Img.arrow, UI.menu.arrow[game.selectedMenu])
        game.ctx.drawImage(this.canvas, 0, 0)
    }
}