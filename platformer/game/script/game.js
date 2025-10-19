class Game {
    constructor() {
        Img.loadImage()

        this.field = new Field()
        this.player = new Player()

        this.scene = 'title'
        this.state = ''
        this.menu = false
        this.lang = 'en'
        this.locale = Locale.data[this.lang]

        this.selectedTitle = 0
        this.selectedMenu = 0

        this.keyMapping = {
            'left': 'ArrowLeft', 'right': 'ArrowRight', 'up': 'ArrowUp', 'down': 'ArrowDown'
        }
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
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

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'field') {
            SceneField.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        
    }

    keyDown(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = true
            }
        }

        if (this.scene === 'title') {
            SceneTitle.keyDown(game, key)
        } else if (this.scene === 'field') {
            SceneField.keyDown(game, key)
        }
    }

    keyUp(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = false
            }
        }

        if (this.scene === 'title') {
            SceneTitle.keyUp(game, key)
        } else if (this.scene === 'field') {
            SceneField.keyUp(game, key)
        }
    }
}
