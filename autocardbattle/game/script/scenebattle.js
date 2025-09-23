class SceneBattle {
    static loop(game) {
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        for (let i = 0; i < 10; i++) {
            Render.strokeRectUI(game.ctx, UI.battle.unit[i])
        }

        Render.strokeRectUI(game.ctx, UI.battle.buttonProceed)
        Render.fillTextUI(game.ctx, 'Proceed', UI.battle.textProceed)

        for (let i = 4; i > -1; i--) {
            let pos = [UI.battle.playerCardStart[0] + UI.battle.playerCardInterval[0] * i, UI.battle.playerCardStart[1]]
            game.card.render(game.ctx, pos)
        }

        for (let i = 4; i > -1; i--) {
            let pos = [UI.battle.enemyCardStart[0] + UI.battle.enemyCardInterval[0] * i, UI.battle.enemyCardStart[1]]
            game.card.render(game.ctx, pos)
        }

        Render.strokeRectUI(game.ctx, UI.battle.playerCrystalBox)
        Render.strokeRectUI(game.ctx, UI.battle.enemyCrystalBox)

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
}
