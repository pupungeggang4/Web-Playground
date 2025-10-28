class Level {
    constructor() {
        this.wave = []
        this.effect = []
        this.time = 0
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.level[ID]))
        this.wave = data['wave']
        this.effect = data['effect']
        this.time = 0
    }
}
