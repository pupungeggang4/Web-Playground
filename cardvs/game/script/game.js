class Game {
    constructor() {
        this.scene = 'game'
        this.state = ''
        this.menu = false
        this.clickMode = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        let tStart = performance.now()
        if (this.scene === 'game') {
            SceneGame.loop(this)
        }
        let tEnd = performance.now()

        this.delta = tEnd - tStart
        if (this.delta < 16) {
            this.delta = 16
        }
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'game') {
            SceneGame.mouseUp(this, pos, button)
        }
    }
}
