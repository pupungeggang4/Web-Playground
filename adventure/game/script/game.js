class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.gameLoop = window.requestAnimationFrame(() => this.loop())
        this.delta = 16
    }

    loop() {
        let before = performance.now()

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        }

        let after = performance.now()
        if ((after - before) < 16) {
            this.delta = 16
        } else {
            this.delta = after - before
        }

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
