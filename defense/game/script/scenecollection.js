class SceneCollection {
    static loop(game) {
        SceneCollection.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.strokeRectUI(game.ctx, UI.collection.buttonBack)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}