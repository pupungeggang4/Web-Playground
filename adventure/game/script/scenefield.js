class SceneField {
    static loop(game) {
        SceneField.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.game.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.game.buttonInfo)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {

        }
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
