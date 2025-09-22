class Card {
    constructor() {
        this.ID = 0
        this.name = ''
        this.type = ''
        this.element = ''
        this.crystal = []
        this.effect = []

        this.description = []
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataE = JSON.parse(JSON.stirngify(dataCardE['ID']))
        let dataD = JSON.parse(JSON.stringify(dataCardD['ID']))
        this.ID = ID
        this.name = data['name']
        this.type = data['type']
        this.element = data['element']
        this.crystal = data['crystal']
        this.effect = dataE
        this.description = dataD
    }
}
