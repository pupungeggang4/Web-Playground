class SceneGame {
    static loop(game) {
        SceneGame.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
    }

    static mouseUp(game, pos, button) {

    }
}
