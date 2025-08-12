class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)
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

    keyDown(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyUp(this, key)
        }
    }

    mouseDown() {

    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (targetRect.left - event.clientX) / targetRect.width * this.canvas.width,
            y: (targetRect.top - event.clientY) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'field') {
            SceneField.mouseUp(this, pos, button)
        }
    }
}
