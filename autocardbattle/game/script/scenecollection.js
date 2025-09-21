class SceneCollection {
    static loop(game) {
        SceneCollection.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Collection', UI.collection.textTitle)
        Render.strokeRectUI(game.ctx, UI.collection.buttonBack)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.collection.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
