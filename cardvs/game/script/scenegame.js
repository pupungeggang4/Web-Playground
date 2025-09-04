class SceneGame {
    static loop(game) {
        SceneGame.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.buttonMenu)
        Render.fillTextUI(game.ctx, 'Hello', [24, 24])

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (game.menu === false) {
            if (pointInsideRectUI(pos, UI.buttonMenu)) {
                game.menu = true
            }
        } else if (game.menu === true) {
            if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                game.menu = false
            }
        }
    }
}
