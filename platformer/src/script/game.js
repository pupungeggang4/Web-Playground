class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false
        this.lang = 'en'
        this.locale = Locale.data[this.lang]

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
    }

    run() {
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = performance.now()

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {

    }
}
