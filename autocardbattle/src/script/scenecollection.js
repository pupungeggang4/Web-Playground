class SceneCollection {
    static loop(game) {
        SceneCollection.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Collection', UI.collection.textTitle)
        for (let i = 0; i < 7; i++) {
            Render.strokeRectUI(game.ctx, UI.collection.tab[i])
        }

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 5; j++) {
                let rect = [UI.collection.cardStart[0] + UI.collection.cardInterval[0] * j, UI.collection.cardStart[1] + UI.collection.cardInterval[1] * i, 200, 280]
                Render.strokeRectUI(game.ctx, rect)
            }
        }
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
