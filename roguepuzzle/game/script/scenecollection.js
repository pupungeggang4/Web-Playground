class SceneCollection {
    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.fillTextUI(game.ctx, Locale.data[game.lang].collection, UI.collection.textTitle)
        Render.strokeRectUI(game.ctx, UI.collection.buttonBack)

        for (let i = 0; i < UI.collection.tab.length; i++) {
            Render.strokeRectUI(game.ctx, UI.collection.tab[i])
        }
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = 'title'
            }
        }
    }
}