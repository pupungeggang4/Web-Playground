class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
        Render.fillTextUI(game.ctx, game.locale.gameName, UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, game.locale.startGame, UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, game.locale.eraseData, UI.title.textErase)
    }
}
