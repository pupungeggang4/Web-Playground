class SceneBattle {
    static loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.battle.handleTick(game)
            }
        }
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, `Turn: ${game.battle.turn}`, UI.battle.textTurn)

        if (game.battle.turnWho === 0) {
            Render.fillTextUI(game.ctx, 'Your turn', UI.battle.textTurnWho)
        } else {
            Render.fillTextUI(game.ctx, 'Enemy turn', UI.battle.textTurnWho)
        }

        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        Render.renderField(game.ctx, game)
        Render.renderCard(game.ctx, game)
        Render.renderCrystal(game.ctx, game)

        Render.drawImageUI(game.ctx, img.button.play, UI.battle.buttonPlay)
        Render.drawImageUI(game.ctx, img.button.pause, UI.battle.buttonPause)
        Render.strokeRectUI(game.ctx, UI.battle.buttonProceed)
        Render.fillTextUI(game.ctx, 'Proceed', UI.battle.textProceed)

        if (game.state === 'reward') {
            Render.renderRewardWindow(game.ctx, game)
        }

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }

                if (game.state === '') {
                    SceneBattle.handleNormalClick(game, pos, button)
                } else if (game.state === 'reward') {
                    SceneBattle.handleRewardClick(game, pos, button)
                }            
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }

    static handleNormalClick(game, pos, button) {
        if (pointInsideRectUI(pos, UI.battle.buttonProceed)) {
            if (game.battle.paused === true) {
                game.battle.proceed(game)
            }
        }

        if (pointInsideRectUI(pos, UI.battle.buttonPlay)) {
            game.battle.paused = false
        } else if (pointInsideRectUI(pos, UI.battle.buttonPause)) {
            game.battle.paused = true
        }
    }

    static handleRewardClick(game, pos, button) {
        if (pointInsideRectUI(pos, UI.window.buttonConfirm)) {
            game.state = ''
            game.battle.startBattle(game)
        }
    }
}
