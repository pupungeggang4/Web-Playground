class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false
        this.lang = 'ko'

        this.selectedCharacter = -1
        this.tab = 0

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.framePrevious = 0
        this.frameCurrent = 0
        this.delta = 16
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
        } else if (this.scene === 'ready') {
            SceneReady.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        } else if (this.scene === 'collection') {
            SceneCollection.loop(this)
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
        } else if (this.scene === 'ready') {
            SceneReady.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(this, pos, button)
        } else if (this.scene === 'collection') {
            SceneCollection.mouseUp(this, pos, button)
        }
    }
}