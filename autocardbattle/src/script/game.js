class Game {
    constructor() {
        Img.loadImage()
        this.player = new Player()
        this.adventure = new Adventure()
        this.battle = new Battle()
        this.selectedCharacter = -1
        this.selected = -1

        this.card = new Card()
        this.card.setData(1)

        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.tCurrent = 0
        this.tPrevious = 0
        this.delta = 16
    }

    run() {
        this.tPrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.tCurrent = performance.now()
        this.delta = this.tCurrent - this.tPrevious
        this.tPrevious = performance.now()

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
