class Unit {
    constructor() {
        this.ID = 0
        this.name = ''
        this.attack = 0
        this.hp = 0
        this.hpMax = 0
        this.effect = []
        this.description = []

        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 160
        this.canvas.height = 160
    }

    setUnit() {

    }
}
