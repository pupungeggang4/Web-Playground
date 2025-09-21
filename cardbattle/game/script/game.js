class Game {
    constructor() {
        imageLoad()
        this.battle = new Battle()

        this.scene = 'game'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.tPrevious = 0
        this.tCurrent = 0
        this.delta = 16
    }

    run() {
        this.tPrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.tCurrent = performance.now()
        this.delta = this.tCurrent - this.tPrevious
        this.tPrevious = performance.now()

        if (this.scene === 'game') {
            SceneGame.loop(this)
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
