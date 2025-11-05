class SceneMain {
    static loop(game) {
        SceneMain.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        game.field.render(game)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
