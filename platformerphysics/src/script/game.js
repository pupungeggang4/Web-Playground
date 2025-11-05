class Game {
    constructor() {
        this.scene = 'main'
        this.field = []
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

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

        if (this.scene === 'main') {
            SceneMain.loop(this)
        }
    }

    keyDown(event) {
        let key = event.key
        if (key === 'ArrowLeft') {
            this.keyPressed['left'] = true
        }
        if (key === 'ArrowRight') {
            this.keyPressed['right'] = true
        }
        if (key === 'ArrowUp') {
            this.keyPressed['up'] = true
        }
        if (key === 'ArrowDown') {
            this.keyPressed['down'] = true
        }
        if (scene === 'main') {
            SceneMain.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key
        if (key === 'ArrowLeft') {
            this.keyPressed['left'] = false
        }
        if (key === 'ArrowRight') {
            this.keyPressed['right'] = false
        }
        if (key === 'ArrowUp') {
            this.keyPressed['up'] = false
        }
        if (key === 'ArrowDown') {
            this.keyPressed['down'] = false
        }
        if (scene === 'main') {
            SceneMain.keyUp(this, key)
        }
    }
}