class Game {
    constructor() {
        this.battle = new Battle()

        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
    
        this.tStart = 0
        this.tEnd = 0
        this.delta = 0
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.tStart = performance.now()
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'game') {
            SceneGame.loop(this)
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
        } else if (this.scene === 'game') {
            SceneGame.mouseUp(this, pos, button)
        }
    }
}
