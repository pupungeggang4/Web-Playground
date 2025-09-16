class Unit {
    constructor() {
        this.attack = 0
        this.hp = 0
        this.hpMax = 0
        this.effect = []

        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 120
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, pos) {
        Render.init(this.ctx)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 78, 118)
        this.ctx.fillStyle = 'black'
        Render.strokeRectUI(this.ctx, UI.unit.rectAttack)
        Render.fillTextUI(this.ctx, this.attack, UI.unit.textAttack)
        Render.strokeRectUI(this.ctx, UI.unit.rectHP)
        Render.fillTextUI(this.ctx, this.hp, UI.unit.textHP)
        Render.drawImageUI(game.ctx, this.canvas, pos)
    }
}
