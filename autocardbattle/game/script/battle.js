class Battle {
    constructor() {
        this.player = new BattlePlayer()
        this.enemy = new BattlePlayer()
        this.field = [null, null, null, null, null, null, null, null, null, null]
        this.turn = 0
        this.turnWho = 0
        this.turnPhase = 'start'
        this.nextProceedTime = 500
        this.actionQueue = []
        this.paused = true
    }

    handleTick(game) {
        if (this.paused === false) {
            if (this.nextProceedTime < 0) {
                this.nextProceedTime = 500
                this.proceed(game)
            } else {
                this.nextProceedTime -= game.delta
            }
        }
    }

    startBattle(game) {
        this.turn = 0
        this.turnWho = 0
        this.field = [null, null, null, null, null, null, null, null, null, null]
        this.player.startBattlePlayer(game.player)
        this.enemy.startBattleEnemy(1101)

        let unit = new Unit()
        unit.setUnitFromPlayer(game.player)
        this.field[0] = unit
        let unitEnemy = new Unit()
        unitEnemy.setUnitFromEnemy(1101)
        this.field[5] = unitEnemy
        this.turnPhase = 'start'
    }

    proceed(game) {
        if (this.actionQueue.length <= 0) {
            if (this.turnPhase === 'start') {
                if (this.turnWho === 0) {
                    this.turn += 1
                    this.player.startTurn(this)
                } else {
                    this.enemy.startTurn(this)
                }
                this.turnPhase = 'play'
            } else if (this.turnPhase === 'play') {
                if (this.turnWho === 0) {
                    if (!this.player.playCard(this)) {
                        this.turnPhase = 'battle'
                    }
                    if (this.player.acceler <= 0) {
                        this.turnPhase = 'battle'
                    } else {
                        this.player.acceler -= 1
                    }
                } else {
                    if (!this.enemy.playCard(this)) {
                        this.turnPhase = 'battle'
                    }
                    if (this.enemy.acceler <= 0) {
                        this.turnPhase = 'battle'
                    } else {
                        this.enemy.acceler -= 1
                    }
                }
            } else if (this.turnPhase === 'battle') {
                if (this.turnWho === 0) {
                    this.player.makeAttackList(this)
                } else {
                    this.enemy.makeAttackList(this)
                }
                this.turnPhase = 'end'
            } else if (game.battle.turnPhase === 'end') {
                if (this.turnWho === 0) {
                    this.player.endTurn()
                    this.turnWho = 1
                } else {
                    this.enemy.endTurn()
                    this.turnWho = 0
                }
                this.turnPhase = 'start'
            }
        } else {
            this.performAction()
            this.deathHandle()
            
            if (this.field[0].hp <= 0 || this.player.deck.length <= 0) {
                this.paused = true
                game.state = 'lose'
            } else if (this.field[5].hp <= 0) {
                this.paused = true
                game.state = 'win'
            }
        }
    }

    performAction() {
        let top = this.actionQueue[0]
        if (top[0] === 'summon') {
            this.field[top[2]] = top[1]
        } else if (top[0] === 'dmg') {
            if (this.field[top[2]] != null) {
                this.field[top[2]].hp -= top[1]
            }
        } else if (top[0] === 'dmgrandom') {
            let dmgList = []
            for (let i = 0; i < top[2].length; i++) {
                if (this.field[top[2][i]] != null) {
                    dmgList.push(top[2][i])
                }
            }
            let index = Math.floor(Math.random() * dmgList.length)

            if (this.field[dmgList[index]] != null) {
                this.field[dmgList[index]].hp -= top[1]
            }
        } else if (top[0] === 'attackrandom') {
            let attackList = []
            if (top[1] < 5 && top[1] > 0) {
                for (let i = 5; i < 10; i++) {
                    if (this.field[i] != null) {
                        attackList.push(i)
                    }
                }
            } else {
                for (let i = 0; i < 5; i++) {
                    if (this.field[i] != null) {
                        attackList.push(i)
                    }
                }
            }
            let index = Math.floor(Math.random() * attackList.length)
            this.battleUnit(top[1], attackList[index])
        } else if (top[0] === 'gainarmor') {
            if (this.field[top[2]] != null) {
                this.field[top[2]].armor += top[1]
            }
        }
        this.actionQueue.shift()
    }

    battleUnit(i1, i2) {
        if (this.field[i1] != null && this.field[i2] != null) {
            this.field[i1].takeDamage(this.field[i2].attack)
            this.field[i2].takeDamage(this.field[i1].attack)
        }
        //this.deathHandle()
    }

    deathHandle() {
        for (let i = 1; i < 5; i++) {
            if (this.field[i] != null) {
                if (this.field[i].hp <= 0) {
                    this.field[i] = null
                }
            }
        }

        for (let i = 6; i < 10; i++) {
            if (this.field[i] != null) {
                if (this.field[i].hp <= 0) {
                    this.field[i] = null
                }
            }
        }
    }
}

class BattlePlayer {
    constructor() {
        this.crystalNum = 0
        this.crystalDeck = []
        this.crystalHand = []
        this.deck = []
        this.acceler = 0
        this.extraCrystal = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
        this.yourCharacter = [5, 6, 7, 8, 9]
        this.yourField = [6, 7, 8, 9]
        this.yourHero = 5
        this.myCharacter = [0, 1, 2, 3, 4]
        this.myField = [1, 2, 3, 4]
        this.myHero = 0
    }

    startBattlePlayer(player) {
        this.crystalNum = 0
        this.acceler = 0
        this.extraCrystal = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
        this.yourCharacter = [5, 6, 7, 8, 9]
        this.yourField = [6, 7, 8, 9]
        this.yourHero = 5
        this.myCharacter = [0, 1, 2, 3, 4]
        this.myField = [1, 2, 3, 4]
        this.myHero = 0

        this.deck = []
        this.crystalDeck = []
        this.crystalHand = []

        let deckList = []
        let crystalDeckList = []

        for (let i = 0; i < player.deck.length; i++) {
            deckList.push(player.deck[i].clone())
        }

        for (let i = 0; i < player.crystalDeck.length; i++) {
            crystalDeckList.push(player.crystalDeck[i].clone())
        }

        while (deckList.length > 0) {
            let index = Math.floor(Math.random() * deckList.length)
            this.deck.push(deckList.splice(index, 1)[0])
        }

        while (crystalDeckList.length > 0) {
            let index = Math.floor(Math.random() * crystalDeckList.length)
            this.crystalDeck.push(crystalDeckList.splice(index, 1)[0])
        }
    }

    startBattleEnemy(ID) {
        this.crystalNum = 0
        this.acceler = 0
        this.extraCrystal = 0
        this.attack = 0
        this.hardness = 0
        this.leadership = 0
        this.myCharacter = [5, 6, 7, 8, 9]
        this.myField = [6, 7, 8, 9]
        this.myHero = 5
        this.yourCharacter = [0, 1, 2, 3, 4]
        this.yourField = [1, 2, 3, 4]
        this.yourHero = 0

        this.deck = []
        this.crystalDeck = []
        this.crystalHand = []
        this.attackStack = []
        let deckList = []
        let crystalDeckList = []

        let data = JSON.parse(JSON.stringify(dataEnemy[ID]))

        for (let i = 0; i < data['deck'].length; i++) {
            let card = new Card()
            card.setData(data['deck'][i])
            deckList.push(card)
        }

        for (let i = 0; i < data['crystal'].length; i++) {
            let crystal = new Crystal()
            crystal.setData(data['crystal'][i])
            crystalDeckList.push(crystal)
        }

        while (deckList.length > 0) {
            let index = Math.floor(Math.random() * deckList.length)
            this.deck.push(deckList.splice(index, 1)[0])
        }

        while (crystalDeckList.length > 0) {
            let index = Math.floor(Math.random() * crystalDeckList.length)
            this.crystalDeck.push(crystalDeckList.splice(index, 1)[0])
        }
    }

    startTurn(battle) {
        if (this.crystalNum < 8) {
            this.crystalNum += 1
        }

        this.drawCrystal(this.crystalNum + this.extraCrystal)

        for (let i = 0; i < this.myField.length; i++) {
            if (battle.field[this.myField[i]] != null) {
                battle.field[this.myField[i]].attackNum = 1
            }
        }
    }

    playCard(battle) {
        if (this.deck.length > 0) {
            let top = this.deck[0]
            if (this.isPlayable(top)) {
                let missed = this.playThisCard(top, battle)
                if (missed === false) {
                    let payList = this.makePayList(top)
                    for (let i = 0; i < payList.length; i++) {
                        this.crystalDeck.push(this.crystalHand.splice(payList[i], 1)[0])
                    }
                }
                this.deck.splice(0, 1)
                return true
            }
        }

        return false
    }

    isPlayable(card) {
        let crystal = JSON.parse(JSON.stringify(card.crystalList))
        if (crystal.length <= 0) {
            return true
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element === 8) {
                for (let j = 0; j < crystal.length; j++) {
                    if (crystal[j] === 8) {
                        crystal.splice(j, 1)
                        if (crystal.length <= 0) {
                            return true
                        }
                        break
                    }
                }
            }
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element >= 1 && this.crystalHand[i].element <= 6) {
                for (let j = 0; j < crystal.length; j++) {
                    if ((crystal[j] === this.crystalHand[i].element) || crystal[j] === 8) {
                        crystal.splice(j, 1)
                        if (crystal.length <= 0) {
                            return true
                        }
                        break
                    }
                }
            }
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element === 7) {
                crystal.shift()
                if (crystal.length <= 0) {
                    return true
                }
            }
        }
        return false
    }

    makePayList(card) {
        let payList = []
        let crystal = JSON.parse(JSON.stringify(card.crystalList))
        if (crystal.length <= 0) {
            return []
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element === 8) {
                for (let j = 0; j < crystal.length; j++) {
                    if (crystal[j] === 8) {
                        payList.push(i)
                        crystal.splice(j, 1)
                        if (crystal.length <= 0) {
                            return payList.sort().reverse()
                        }
                    }
                }
            }
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element >= 1 && this.crystalHand[i].element <= 6) {
                for (let j = 0; j < crystal.length; j++) {
                    if (crystal[0] === this.crystalHand[i].element || crystal[0] === 8) {
                        payList.push(i)
                        crystal.splice(j, 1)
                        if (crystal.length <= 0) {
                            return payList.sort().reverse()
                        }
                    }
                }
            }
        }
        for (let i = 0; i < this.crystalHand.length; i++) {
            if (this.crystalHand[i].element === 7) {
                payList.push(i)
                crystal.shift()
                if (crystal.length <= 0) {
                    return payList.sort().reverse()
                }
            }
        }
        return payList.sort().reverse()
    }

    playThisCard(card, battle) {
        let missed = false

        let played = JSON.parse(JSON.stringify(card.played))
        while (played.length > 0) {
            let front = played[0]
            if (front[0] === 'summon') {
                for (let i = 0; i < this.myField.length; i++) {
                    let fieldIndex = this.myField[i]
                    if (battle.field[fieldIndex] === null) {
                        let unit = new Unit()
                        unit.setUnitFromCard(card)
                        battle.actionQueue.push(['summon', unit, fieldIndex])
                        break
                    }

                    if (i === this.myField.length - 1) {
                        missed = true
                        return missed
                    }
                }
            } else if (front[0] === 'dmghero') {
                battle.actionQueue.push(['dmg', front[1] + this.attack, this.yourHero])
            } else if (front[0] === 'dmgrandom') {
                battle.actionQueue.push(['dmgrandom', front[1] + this.attack, this.yourCharacter])
            } else if (front[0] === 'gainacceler') {
                this.acceler += front[1]
            } else if (front[0] === 'gainarmor') {
                battle.actionQueue.push(['gainarmor', front[1] + this.hardness, this.myHero])
            }
            played.shift()
        }
        return missed
    }

    makeAttackList(battle) {
        for (let i = 0; i < this.myField.length; i++) {
            let unit = battle.field[this.myField[i]]
            if (unit != null) {
                for (let j = 0; j < unit.attackNum; j++) {
                    battle.actionQueue.push(['attackrandom', this.myField[i]])
                }
            }
        }
    }

    endTurn() {
    }

    drawCrystal(num) {
        for (let i = 0; i < num; i++) {
            if (this.crystalDeck.length > 0) {
                this.crystalHand.push(this.crystalDeck.shift())
            }
        }
    }
}
