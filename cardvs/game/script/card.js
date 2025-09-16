class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.description = []
        this.type = ''
        this.element = ''
        this.rarity = ''

        this.attack = 0
        this.hp = 0
        this.crystal = []
        this.effect = []

        this.canvas = document.createElement('canvas')
        this.canvas.width = UI.card.rect[2]
        this.canvas.height = UI.card.rect[3]
        this.ctx = this.canvas.getContext('2d')
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataD = JSON.parse(JSON.stringify(dataCardD[ID]))
        this.ID = data['ID']
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.rarity = data['rarity']

        this.attack = data['stat'][0]
        this.hp = data['stat'][1]
        this.crystal = data['crystal']
        this.effect = data['effect']

        this.description = dataD
    }

    render(game, pos) {
        Render.init(this.ctx)
        this.ctx.clearRect(0, 0, UI.card.rect[2], UI.card.rect[3])

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, UI.card.rect[2], UI.card.rect[3])
        this.ctx.strokeRect(1, 1, UI.card.rect[2] - 2, UI.card.rect[3] - 2)
        this.ctx.fillStyle = 'black'

        Render.strokeRectUI(this.ctx, UI.card.image)

        this.ctx.font = '20px neodgm'
        Render.fillTextUI(this.ctx, this.name, UI.card.textName)

        for (let i = 0; i < this.description.length; i++) {
            let pos = [UI.card.textDescription[0], UI.card.textDescription[1] + UI.card.textDescription[3] * i]
            Render.fillTextUI(this.ctx, this.description[i], pos)
        }

        if (this.type === 'unit') {
            this.ctx.font = '32px neodgm'
            Render.fillTextUI(this.ctx, this.attack, UI.card.textAttack)
            Render.fillTextUI(this.ctx, this.hp, UI.card.textHP)
        }

        Render.drawImageUI(game.ctx, this.canvas, pos)
    }
}
