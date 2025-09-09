class SceneField {
    static loop(game) {
        SceneField.render(game)
    }

    static render(game) {
        Render.init(game.ctx)

        game.field.player.render(game, game.field)

        Render.drawImageUI(game.ctx, img.button.menu, UI.field.buttonMenu)
        Render.drawImageUI(game.ctx, img.button.info, UI.field.buttonInfo)
        Render.drawImageUI(game.ctx, img.button.left, UI.field.buttonLeft)
        Render.drawImageUI(game.ctx, img.button.right, UI.field.buttonRight)
        Render.drawImageUI(game.ctx, img.button.up, UI.field.buttonUp)
        Render.drawImageUI(game.ctx, img.button.down, UI.field.buttonDown)

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.field.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                }
            }
        }
    }

    static mouseDown(game, pos, button) {

    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
