class Game {
    constructor() {
        this.village = new Village()
        this.battle = new Battle()
        this.player = new Player()

        this.scene = 'title'
        this.state = ''
        this.menu = false
        this.lang = 'en'
        this.locale = Locale.data[this.lang]

        this.selectedTitle = 0
        this.selectedMenu = 0

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
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
        } else if (this.scene === 'village') {
            SceneVillage.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        } else if (this.scene === 'village') {
            SceneVillage.keyDown(this, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        } else if (this.scene === 'village') {
            SceneVillage.keyUp(this, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyUp(this, key)
        }
    }
}
