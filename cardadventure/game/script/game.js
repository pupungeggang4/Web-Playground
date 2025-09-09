class Game {
    constructor() {
        imageLoad()
        
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.tStart = 0
        this.tEnd = 0
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.tStart = performance.now()
        
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'field') {
            SceneField.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        }

        this.tEnd = performance.now()
        this.delta = this.tEnd - this.tStart
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

        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'field') {
            SceneField.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(this, pos, button)
        }
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyUp(this.key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyUp(this.key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'field') {
            SceneField.keyDown(this.key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyDown(this.key)
        }
    }
}
