class Level {
    constructor() {
        this.ID = 0
        this.wave = []
        this.effect = []
        this.time = 0
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.level[ID]))
        this.ID = ID
        this.wave = data['wave']
        this.effect = data['effect']
        this.time = 0
    }

    handleTick(game) {
        this.time += game.delta / 1000
    }
}
