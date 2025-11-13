class SceneTutorial {
    constructor(game) {
        
    }

    loop(game) {
        if (game.menu === false) {
            if (game.state === 'tutorial' || game.state === '') {
                game.battle.handleTick(game)
            }
            if (game.tutorialPhase === 'energy_gen') {
                if (game.tutorialWait <= 0) {
                    game.tutorialPhase = 'upgrade'
                    game.state = 'break'
                } else {
                    game.tutorialWait -= game.delta / 1000
                }
            } else if (game.tutorialPhase === 'upgraded') {
                if (game.tutorialWait <= 0) {
                    game.tutorialPhase = 'enemy'
                    let unit = new Unit()
                    game.battle.field.portal[0].spawnUnit(game, unit)
                } else {
                    game.tutorialWait -= game.delta / 1000
                }
            } else if (game.tutorialPhase === 'enemy') {
                if (game.battle.field.unitEnemy.length <= 0) {
                    game.tutorialPhase = 'bounce'
                    game.state = 'break'
                }
            }
        }
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.battle.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)
        game.battle.render(game)
        Render.renderBattleUI(game)
        Render.renderTutorial(game)

        if (game.state === 'level_clear') {
            Render.renderWindowLevelClear(game)   
        }

        if (game.menu === true) {
            Render.renderMenuSmall(game)
        }
    }

    mouseUp(game, pos, button) {
        if (game.menu === false) {
            if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                game.menu = true
            } else {
                if (game.state === '') {
                    this.handleTutorialClick(game, pos, button)
                } else if (game.state === 'break') {
                    this.handleTutorialClickBreak(game, pos, button)
                } else if (game.state === 'level_clear') {
                    if (Func.pointInsideRectUI(pos, UI.windowSmall.buttonOK)) {
                        game.changeScene('title')
                        game.state = ''
                    }
                }
            }
        } else if (game.menu === true) {
            if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menuSmall.buttonResume)) {
                game.menu = false
            } else if (Func.pointInsideRectUI(pos, UI.menuSmall.buttonExit)) {
                game.menu = false
                game.changeScene('title')
                game.state = ''
            }
        }
    }

    handleTutorialClick(game, pos, button) {
        let battle = game.battle
        if (battle.stateClick === '') {
            for (let i = 0; i < 8; i++) {
                let rect = [UI.battle.handStart[0] + UI.battle.handInterval[0] * i, UI.battle.handStart[1], UI.battle.handSize[0], UI.battle.handSize[1]]
                if (Func.pointInsideRectUI(pos, rect)) {
                    battle.stateClick = 'card'
                    battle.selectedHandIndex = i
                }
            }

            if (Func.pointInsideRectUI(pos, UI.battle.buttonBounce)) {
                battle.stateClick = 'bounce'
            }
        } else if (battle.stateClick === 'card') {
            let field = game.battle.field
            let fieldPos = new Vec2(pos.x - field.camera.size.x / 2, pos.y - field.camera.size.y / 2)
            if (fieldPos.insideRect(field.rect)) {
                let row = Math.floor((fieldPos.y + field.rect.size.y / 2) / 80)
                let col = Math.floor((fieldPos.x + field.rect.size.x / 2) / 80)
                game.battle.player.playCard(game, row, col, battle.selectedHandIndex)
            }
            battle.stateClick = ''
            battle.selectedHandIndex = -1
        } else if (battle.stateClick === 'bounce') {
            let field = game.battle.field
            let fieldPos = new Vec2(pos.x - field.camera.size.x / 2, pos.y - field.camera.size.y / 2)
            if (fieldPos.insideRect(field.rect)) {
                let row = Math.floor((fieldPos.y + field.rect.size.y / 2) / 80)
                let col = Math.floor((fieldPos.x + field.rect.size.x / 2) / 80)
                game.battle.field.putTowerToDeck(game, row, col)
            }
            battle.stateClick = ''
        }
    }

    handleTutorialClickBreak(game, pos, button) {
        if (game.tutorialPhase === 'welcome') {
            game.tutorialPhase = 'explain'
        } else if (game.tutorialPhase === 'explain') {
            game.tutorialPhase = 'play_card'
            game.battle.player.hand = [new Card()]
            game.battle.player.hand[0].setData(1)
            game.battle.player.deck = []
            for (let i = 0; i < 6; i++) {
                let card = new Card()
                card.setData(1)
                game.battle.player.deck.push(card)
            }
        } else if (game.tutorialPhase === 'play_card') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[0])) {
                game.tutorialPhase = 'play_select'
                
            }
        } else if (game.tutorialPhase === 'play_select') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[1])) {
                game.battle.player.playCard(game, 0, 1, 0)
                game.tutorialPhase = 'energy_gen'
                game.state = 'tutorial'
                game.tutorialWait = 4
                game.battle.player.drawCool = 1000
            }
        } else if (game.tutorialPhase === 'upgrade') {
            if (Func.pointInsideRectUI(pos, UI.battle.buttonUpgrade)) {
                game.battle.player.upgrade(game)
                game.tutorialPhase = 'upgraded'
                game.state = 'tutorial'
                game.tutorialWait = 2
            }
        } else if (game.tutorialPhase === 'bounce') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[2])) {
                game.tutorialPhase = 'bounce_select'
            }
        } else if (game.tutorialPhase === 'bounce_select') {
            game.battle.field.putTowerToDeck(game, 0, 1)
            game.tutorialPhase = 'draw'
            game.battle.player.hand.push(game.battle.player.deck.shift())
            game.battle.player.drawCool = 4
        } else if (game.tutorialPhase === 'draw') {
            game.tutorialPhase = 'free'
            game.state = ''
            game.battle.level.wave = [[5, [801, 801, 801]], [10, [801, 801, 801]], [15, [801, 801, 801, 801, 801, 801]]]
            game.battle.level.time = 0
        }
    }
}
