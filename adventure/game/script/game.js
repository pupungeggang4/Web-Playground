class Game {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.gameLoop = window.requestAnimationFrame(() => this.loop())
        this.delta = 16
    }

    loop() {
        let before = performance.now()

        let after = performance.now()
        if ((after - before) < 16) {
            this.delta = 16
        } else {
            this.delta = after - before
        }
        console.log(this.delta)
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
