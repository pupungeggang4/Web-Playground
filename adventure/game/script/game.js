class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.gameLoop = window.requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.ctx.fillRect(0, 0, 20, 20)
        this.gameLoop = window.requestAnimationFrame(() => this.loop())
    }

    keyDown() {

    }

    keyUp() {

    }

    mouseDown() {

    }

    mouseUp() {

    }
}
