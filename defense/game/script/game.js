class Game {
    constructor() {
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.canvas = document.gerElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)
    }

    loop() {

    }

    mouseUp(event) {

    }
}
