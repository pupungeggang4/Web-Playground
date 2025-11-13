class SceneCollection {
    constructor(game) {
        
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.drawImageUI(game.ctx, Img.arrowBack, UI.collection.buttonBack)
        Render.strokeRectUI(game.ctx, UI.collection.buttonBack)
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.changeScene('title')
                game.state = ''
            }
        }
    }
}