class SceneGame {
    static loop(game) {
        SceneGame.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.drawImageUI(game.ctx, img.button.menu, UI.buttonMenu)
        Render.fillTextUI(game.ctx, 'Game', [24, 24])

        Render.strokeRectUI(game.ctx, UI.descriptionBox)
        Render.strokeRectUI(game.ctx, UI.lower.item)
        Render.strokeRectUI(game.ctx, UI.lower.equipment)
        Render.renderField(game, game.battle)
        Render.renderHand(game, game.battle)
        Render.renderCrystal(game, game.battle)

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
