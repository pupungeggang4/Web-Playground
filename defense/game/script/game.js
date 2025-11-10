class Game {
    constructor() {
        Img.load()
        this.scene = new SceneTitle()
        this.state = ''
        this.tutorialPhase = 'welcome'
        this.tutorialWait = 0
        this.menu = false
        this.lang = 0
        this.locale = Locale.data[Locale.langList[this.lang]]

        this.pageLevel = 0
        this.battle = new Battle()

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        this.delta = 0
        this.frameCurrent = 0
        this.framePrevious = 0
    }

    run() {
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

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.mouseUp(this, pos, button)
    }
}
