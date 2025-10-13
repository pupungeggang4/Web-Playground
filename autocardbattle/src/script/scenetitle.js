class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Auto Card Battle', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, 'Collection', UI.title.textCollection)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'ready'
                game.state = ''
                game.selectedCharacter = -1
            }

            if (Func.pointInsideRectUI(pos, UI.title.buttonCollection)) {
                game.scene = 'collection'
                game.state = ''
            }
        }
    }
}
