class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {

    }

    keyUp(event) {

    }

    mouseUp(event) {

    }
}
