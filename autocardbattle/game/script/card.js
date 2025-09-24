class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = ''
        this.element = ''
        this.crystal = []
        this.stat = []
        this.effect = []

        this.description = []
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = UI.card.rect[2]
        this.canvas.height = UI.card.rect[3]
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataE = JSON.parse(JSON.stringify(dataCardE[ID]))
        let dataD = JSON.parse(JSON.stringify(dataCardD[ID]))
        this.ID = ID
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.crystal = data['crystal']
        this.stat = data['stat']
        this.effect = dataE
        this.description = dataD
    }

    render(ctx, pos) {
        this.ctx.font = '32px neodgm'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 4
        this.ctx.fillStyle = 'white'
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'black'

        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height)


        this.ctx.fillStyle = 'yellow'
        Render.fillRectUI(this.ctx, UI.card.image)
        this.ctx.fillStyle = 'black'

        this.ctx.font = '16px neodgm'
        Render.fillTextUI(this.ctx, this.name, UI.card.textName)

        if (this.type === 'unit') {
            this.ctx.font = '32px neodgm'
            Render.fillTextUI(this.ctx, this.stat[0], UI.card.textAttack)
            Render.fillTextUI(this.ctx, this.stat[1], UI.card.textHP)
        }

        Render.drawImageUI(ctx, this.canvas, pos)
    }
}
