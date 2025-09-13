class SceneMain {
    static loop(game) {
        SceneMain.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        game.coin.render(game, game.ctx, game.field)
        game.coin2.render(game, game.ctx, game.field)
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
