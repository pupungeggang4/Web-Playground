class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.fillTextUI(game.ctx, Locale.data[game.lang].gameTitle, UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, Locale.data[game.lang].startGame, UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, Locale.data[game.lang].collection, UI.title.textCollection)
        Render.strokeRectUI(game.ctx, UI.title.buttonLang)
        Render.fillTextUI(game.ctx, Locale.data[game.lang].language, UI.title.textLang)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'ready'
                game.selectedCharacter = -1
            } else if (Func.pointInsideRectUI(pos, UI.title.buttonLang)) {
                if (game.lang === 'ko') {
                    game.lang = 'en'
                } else if (game.lang === 'en') {
                    game.lang = 'ko'
                }
            } else if (Func.pointInsideRectUI(pos, UI.title.buttonCollection)) {
                game.scene = 'collection'
                game.tab = 0
            }
        }
    }
}