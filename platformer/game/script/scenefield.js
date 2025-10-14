class SceneField {
    static loop(game) {
        SceneField.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
