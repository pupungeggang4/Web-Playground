class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = 'unit'
        this.element = ''
        this.energy = 0
        this.stat = [0, 0, 0]
        this.effect = []
    }

    setData(ID) {
        this.ID = ID
        let data = JSON.parse(JSON.stringify(Data.card[ID]))
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.energy = data['energy']
        this.stat = data['stat']
        this.effect = data['effect']
    }

    toTower() {
        let tower = new Tower()
        tower.ID = this.ID
        tower.name = this.name
        tower.element = this.element
        tower.energy = this.energy
        tower.attack = this.stat[0]
        tower.attackCool = 1.0 / this.stat[1]
        tower.attackSpeed = this.stat[1]
        tower.attackRange = []
        tower.effect = this.effect
        return tower
    }
}
