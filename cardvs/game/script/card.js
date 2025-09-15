class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = ''
        this.element = ''
        this.rarity = ''

        this.attack = 0
        this.hp = 0
        this.crystal = []
        this.effect = []

        this.canvas = document.createElement('canvas')
        this.canvas.width = 160
        this.canvas.height = 240
        this.ctx = this.canvas.getContext('2d')
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        this.ID = data['ID']
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.rarity = data['rarity']

        this.attack = data['stat'][0]
        this.hp = data['stat'][1]
        this.crystal = data['crystal']
        this.effect = data['effect']
    }

    render(game, pos) {

    }
}
