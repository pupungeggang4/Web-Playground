class SceneGame {
    static loop(game) {
        SceneGame.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Game', [24, 24])
        Render.drawImageUI(game.ctx, img.button.menu, UI.buttonMenu)

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
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
}
