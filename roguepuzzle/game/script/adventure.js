class Adventure {
    constructor() {
        this.round = 0
    }

    startAdventure() {
        this.round = 0
    }
}

class AdventurePlayer {
    constructor() {
        this.hp = 0
        this.deck = []
        this.equipment = []
        this.item = []
    }

    startAdventure(ID) {
        this.hp = 70
    }
}