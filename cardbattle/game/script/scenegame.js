class SceneGame {
    static loop(game) {
        SceneGame.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Game', UI.textTitle)
        Render.drawImageUI(game.ctx, img.button.menu, UI.buttonMenu)

        Render.renderRight(game, game.ctx, game.battle.player)

        Render.renderBattleField(game, game.ctx)

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
