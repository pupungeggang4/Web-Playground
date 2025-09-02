class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Card Adventure', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase', UI.title.textErase)
    }

    static mouseUp(game, pos, button) {

    }
}
