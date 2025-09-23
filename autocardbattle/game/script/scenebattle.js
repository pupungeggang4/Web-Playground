class SceneBattle {
    static loop(game) {
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        Render.renderField(game.ctx, game)
        Render.renderCard(game.ctx, game)
        Render.renderCrystal(game.ctx, game)

        Render.strokeRectUI(game.ctx, UI.battle.buttonProceed)
        Render.fillTextUI(game.ctx, 'Proceed', UI.battle.textProceed)

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
