class Game {
    constructor() {
        imageLoad()
        this.field = new Field()
        this.coin = new Coin()
        this.coin2 = new Coin()
        this.coin2.rect.pos.x = 80

        this.scene = 'main'
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.tPrevious = 0
        this.tCurrent = 0
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

        if (this.scene === 'main') {
            SceneMain.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key

        if (this.scene === 'main') {
            SceneMain.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'main') {
            SceneMain.keyUp(this, key)
        }
    }
}
