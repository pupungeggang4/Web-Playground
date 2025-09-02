class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        let tStart = performance.now()
        
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'field') {
            SceneField.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        }

        let tEnd = performance.now()
        if (tEnd - tStart > 16) {
            this.delta = tEnd - tStart
        } else {
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

        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'field') {
            SceneField.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(this, pos, button)
        }
    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}
