class Adventure {
    constructor() {
        this.layout = [
            ['battle', 'battle', 'battle'],
            ['battle', 'shop', 'event'],
            ['battle', 'elite', 'battle'],
            ['battle', 'shop', 'event'],
            ['battle', 'elite', 'battle'],
            ['battle', 'shop', 'event'],
            ['boss', 'boss', 'boss']
        ]
        this.nextSelected = -1
        this.round = 0
        this.rewardSelected = -1
        this.rewardType = 'card'
        this.rewardItem = [new Card(), new Card(), new Card()]
        this.rewardItem[0].setData(801)
        this.rewardItem[1].setData(802)
        this.rewardItem[2].setData(803)
    }

    adventureStart() {
        this.round = 0
        this.rewardType = 'card'
        this.rewardSelected = -1
        this.nextSelected = -1
    }
}

class Player {
    constructor() {
        this.hp = 0
        this.gold = 0
        this.item = []
        this.equipment = []
        this.deck = []
        this.crystalDeck = []
    }

    createCharacter(characterID) {
        this.hp = 20
        this.gold = 50
        this.deck = []
        this.crystalDeck = []
        this.equipment = []

        for (let i = 0; i < dataCharacter[characterID]['deck'].length; i++) {
            let card = new Card()
            card.setData(dataCharacter[characterID]['deck'][i])
            this.deck.push(card)
        }

        for (let i = 0; i < dataCharacter[characterID]['crystal'].length; i++) {
            let crystal = new Crystal()
            crystal.setData(dataCharacter[characterID]['crystal'][i])
            this.crystalDeck.push(crystal)
        }
    }
}
