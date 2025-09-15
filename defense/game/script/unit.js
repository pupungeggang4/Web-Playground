class Unit {
    constructor() {
        this.hp = 0
        this.hpMax = 0
        this.speed = 0
        this.style = ''
        this.effect = []
        this.weapon = 0

        this.rect = new Rect2(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, field) {

    }
}
