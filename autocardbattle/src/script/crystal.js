class Crystal {
    constructor() {
        this.ID = 0
        this.name = ''
        this.element = ''
        this.effect = []

        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 40
        this.canvas.height = 40
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCrystal[ID]))
        this.ID = ID
        this.name = data['name']
        this.element = data['element']
        this.effect = data['effect']
    }

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        Render.drawImageUI(this.ctx, Img.crystal[this.ID], [0, 0])
        Render.drawImageUI(ctx, this.canvas, pos)
    }

    clone() {
        let crystal = new Crystal()
        crystal.ID = this.ID
        crystal.name = this.name
        crystal.element = this.element
        crystal.effect = JSON.parse(JSON.stringify(this.effect))
        return crystal
    }
}
