class SceneBattle {
    static loop(game) {
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

        Render.strokeRectUI(game.ctx, UI.battle.buttonPlay)
        Render.strokeRectUI(game.ctx, UI.battle.buttonPause)
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

                if (game.state === 'reward') {
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

    static handleRewardClick(game, pos, button) {
        if (pointInsideRectUI(pos, UI.window.buttonConfirm)) {
            game.state = ''
            game.battle.startBattle(game)
        }
    }
}
