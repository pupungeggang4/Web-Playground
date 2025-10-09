class Adventure {
    constructor() {
        this.round = 0
        this.layout = [
            ['battle', 'battle', 'battle'],
            ['shop', 'rest', 'event'],
            ['battle', 'battle', 'battle'],
            ['shop', 'rest', 'event'],
            ['battle', 'battle', 'battle'],
            ['shop', 'rest', 'event'],
            ['battle', 'battle', 'battle'],
            ['shop', 'rest', 'event'],
            ['battle', 'battle', 'battle'],
            ['shop', 'rest', 'event'],
            ['battle', 'battle', 'battle'],
            ['boss', 'boss', 'boss']
        ]
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
