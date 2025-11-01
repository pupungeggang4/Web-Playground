class SceneTutorial {
    static loop(game) {
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
                if (game.battle.field.unit.length <= 0) {
                    game.tutorialPhase = 'bounce'
                    game.state = 'break'
                }
            }
        }
        SceneTutorial.render(game)
    }

    static render(game) {
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

    static mouseUp(game, pos, button) {
        if (game.menu === false) {
            if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                game.menu = true
            } else {
                if (game.state === '') {
                    SceneTutorial.handleTutorialClick(game, pos, button)
                } else if (game.state === 'break') {
                    SceneTutorial.handleTutorialClickBreak(game, pos, button)
                } else if (game.state === 'level_clear') {
                    if (Func.pointInsideRectUI(pos, UI.windowSmall.buttonOK)) {
                        game.scene = 'title'
                        game.state = ''
                    }
                }
            }
        } else if (game.menu === true) {
            if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menuSmall.buttonResume)) {
                game.menu = false
            } else if (Func.pointInsideRectUI(pos, UI.menuSmall.buttonExit)) {
                game.menu = false
                game.scene = 'title'
                game.state = ''
            }
        }
    }

    static handleTutorialClick(game, pos, button) {

    }

    static handleTutorialClickBreak(game, pos, button) {
        if (game.tutorialPhase === 'welcome') {
            game.tutorialPhase = 'explain'
        } else if (game.tutorialPhase === 'explain') {
            game.tutorialPhase = 'play_card'
        } else if (game.tutorialPhase === 'play_card') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[0])) {
                game.tutorialPhase = 'play_select'
            }
        } else if (game.tutorialPhase === 'play_select') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[1])) {
                game.battle.player.energy -= 2
                game.battle.field.layout[0][1] = new Tower()
                game.tutorialPhase = 'energy_gen'
                game.state = 'tutorial'
                game.tutorialWait = 4
            }
        } else if (game.tutorialPhase === 'upgrade') {
            game.battle.player.energy -= 3
            game.battle.player.energyGen += 0.2
            game.battle.player.energyMax += 2
            game.battle.player.level += 1
            game.tutorialPhase = 'upgraded'
            game.state = 'tutorial'
            game.tutorialWait = 2
        } else if (game.tutorialPhase === 'bounce') {
            if (Func.pointInsideRectUI(pos, UI.tutorialArea[2])) {
                game.tutorialPhase = 'bounce_select'
            }
        } else if (game.tutorialPhase === 'bounce_select') {
            game.battle.field.layout[0][1] = null
            game.tutorialPhase = 'draw'
        } else if (game.tutorialPhase === 'draw') {
            game.tutorialPhase = 'free'
            game.state = ''
            game.battle.level.wave = [[5, [801, 801, 801]], [10, [801, 801, 801]], [15, [801, 801, 801, 801, 801, 801]]]
            game.battle.level.time = 0
        }
    }
}
