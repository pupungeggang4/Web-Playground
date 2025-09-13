class Game {
    constructor() {
        this.scene = 'main'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.tStart = 0
        this.tEnd = 0
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {

    }

    keyUp(event) {
        
    }
}
