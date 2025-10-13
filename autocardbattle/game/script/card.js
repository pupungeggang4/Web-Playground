class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = ''
        this.element = ''
        this.crystal = []
        this.crystalList = []
        this.stat = []
        this.effect = []
        this.played = []

        this.description = []
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = UI.card.rect[2]
        this.canvas.height = UI.card.rect[3]
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataP = JSON.parse(JSON.stringify(dataCardP[ID]))
        let dataD = JSON.parse(JSON.stringify(dataCardD[ID]))
        this.ID = ID
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.crystal = data['crystal']
        this.crystalList = data['crystallist']
        this.stat = data['stat']
        this.effect = data['effect']
        this.played = dataP
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

        this.ctx.lineWidth = 2
        for (let i = 0; i < this.crystal.length; i++) { 
            let crystal_pos = [UI.card.crystalStart[0] + UI.card.crystalInterval[0] * i, UI.card.crystalInterval[1]]
            let text_pos = [UI.card.crystalTextStart[0] + UI.card.crystalInterval[0] * i, UI.card.crystalTextStart[1]]
            Render.drawImageUI(this.ctx, Img.crystal[this.crystal[i][0]], crystal_pos)
            Render.fillTextUI(this.ctx, this.crystal[i][1], text_pos)
        }

        Render.drawImageUI(this.ctx, Img.card[this.ID], UI.card.image)

        this.ctx.font = '16px neodgm'
        Render.fillTextUI(this.ctx, this.name, UI.card.textName)

        for (let i = 0; i < this.description.length; i++) {
            let pos = [UI.card.textDescription[0], UI.card.textDescription[1] + UI.card.textDescription[3] * i]
            Render.fillTextUI(this.ctx, this.description[i], pos)
        }

        if (this.type === 'unit') {
            this.ctx.font = '32px neodgm'
            Render.fillTextUI(this.ctx, this.stat[0], UI.card.textAttack)
            Render.fillTextUI(this.ctx, this.stat[1], UI.card.textHP)
        }

        Render.drawImageUI(ctx, this.canvas, pos)
    }

    clone() {
        let card = new Card()
        card.ID = this.ID
        card.name = this.name
        card.type = this.type
        card.element = JSON.parse(JSON.stringify(this.element))
        card.crystal = JSON.parse(JSON.stringify(this.crystal))
        card.crystalList = JSON.parse(JSON.stringify(this.crystalList))
        card.stat = JSON.parse(JSON.stringify(this.stat))
        card.effect = JSON.parse(JSON.stringify(this.effect))
        card.played = JSON.parse(JSON.stringify(this.played))
        card.description = JSON.parse(JSON.stringify(this.description))
        return card
    }
}
