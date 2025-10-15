class Unit {
    constructor() {
        this.ID = 0
        this.name = ''
        this.attack = 0
        this.hp = 0
        this.hpMax = 0
        this.attackNum = 0
        this.effect = []
        this.description = []

        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 160
        this.canvas.height = 160
    }

    setUnitFromCard(card) {
        this.ID = card.ID
        this.name = card.name
        this.attack = card.stat[0]
        this.hp = card.stat[1]
        this.hpMax = card.stat[1]
        this.effect = JSON.parse(JSON.stringify(card.effect))
        this.description = JSON.parse(JSON.stringify(card.description))
    }

    setUnitFromPlayer(player) {
        this.ID = 1001
        this.name = 'Hero'
        this.attack = 0
        this.hp = player.hp
        this.hpMax = player.hp
        this.effect = []
        this.description = []
    }

    setUnitFromEnemy(ID) {
        let data = JSON.parse(JSON.stringify(dataEnemy[ID]))
        this.ID = ID
        this.name = 'Enemy'
        this.attack = 0
        this.hp = data['hp']
        this.hpMax = data['hp']
        this.effect = []
        this.description = []
    }

    render(ctx, game, pos) {
        this.ctx.font = '32px neodgm'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.lineWidth = 4
        this.ctx.fillStyle = 'white'
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width)
        this.ctx.fillRect(0, 0, this.canvas.height, this.canvas.width)
        this.ctx.fillStyle = 'black'

        Render.fillTextUI(this.ctx, this.attack, UI.unit.textAttack)
        Render.fillTextUI(this.ctx, this.hp, UI.unit.textHP)

        if (this.ID > 1000) {
            Render.drawImageUI(this.ctx, Img.hero[this.ID], UI.unit.image)
        } else {
            Render.drawImageUI(this.ctx, Img.card[this.ID], UI.unit.image)
        }

        Render.drawImageUI(ctx, this.canvas, pos)
    }
}
