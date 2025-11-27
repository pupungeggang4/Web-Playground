class Game {
    constructor() {
        this.cameraPos = [640, 360]
        this.sight = 160

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvasDark = document.createElement('canvas')
        this.ctxDark = this.canvasDark.getContext('2d')
        this.canvasDark.width = 1280
        this.canvasDark.height = 720
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }
        this.keyMapping = {
            'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'
        }
        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
    }

    run() {
        this.scene = new Scene(this)
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = performance.now()
        this.scene.loop(this)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key
        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = true
            }
        }
    }

    keyUp(event) {
        let key = event.key
        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = false
            }
        }
    }
}
