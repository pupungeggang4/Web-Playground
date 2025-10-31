class Level {
    constructor() {
        this.ID = 0
        this.wave = []
        this.effect = []
        this.time = 0
        this.unitSummonCool = 0
        this.unitSummonCoolMax = 0.1
        this.unitQueue = []
        this.spawnIndex = 0
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(Data.level[ID]))
        this.ID = ID
        this.wave = data['wave']
        this.effect = data['effect']
        this.time = 0
    }

    handleTick(game) {
        let field = game.battle.field
        this.time += game.delta / 1000
        if (this.wave.length > 0) {
            if (this.time >= this.wave[0][0]) {
                for (let i = 0; i < this.wave[0][1].length; i++) {
                    this.unitQueue.push(this.wave[0][1][i])
                }
                this.wave.shift()
            }
        }

        if (this.unitSummonCool <= 0) {
            if (this.unitQueue.length > 0) {
                let unit = new Unit()
                unit.setData(this.unitQueue[0])
                field.portal[this.spawnIndex].spawnUnit(game, unit)
                this.unitQueue.shift()
                this.spawnIndex = (this.spawnIndex + 1) % field.portal.length
                if (this.unitQueue.length <= 0) {
                    this.spawnIndex = Math.floor(Math.random() * field.portal.length)
                }
                this.unitSummonCool = this.unitSummonCoolMax
            }
        } else {
            this.unitSummonCool -= game.delta / 1000
        }
    }
}
