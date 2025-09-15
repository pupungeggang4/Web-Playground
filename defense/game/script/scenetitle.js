class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Defense', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
    }

    static mouseUp(game, pos, button) {
        if (pointInsideRectUI(pos, UI.title.buttonStart)) {
            game.scene = 'game'
            game.state = ''
        }
    }
}
