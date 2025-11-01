class Card {
    constructor() {
        this.name = ''
        this.type = 'unit'
        this.element = ''
        this.energy = 0
        this.stat = [0, 0, 0]
        this.effect = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.card[ID]))
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.energy = data['energy']
        this.stat = data['stat']
        this.effect = data['effect']
    }
}
