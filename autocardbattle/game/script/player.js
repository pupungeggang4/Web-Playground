class Player {
    constructor() {
        this.hp = 0
        this.gold = 0
        this.item = []
        this.equipment = []
        this.deck = []
        this.crystalDeck = []
    }

    generateDeck(characterID) {
        this.deck = []
        this.crystalDeck = []

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
