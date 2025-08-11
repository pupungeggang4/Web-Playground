class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        game.ctx.fillRect(80, 80, 80, 80)
    }
}
