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
        Render.strokeRectUI(game.ctx, UI.title.buttonLang)
        Render.fillTextUI(game.ctx, game.locale.lang, UI.title.textLang)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, game.locale.collection, UI.title.textCollection)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, game.locale.eraseData, UI.title.textErase)
        
        Render.drawImageUI(game.ctx, Img.arrow, UI.title.arrow[game.selectedTitle])
    }

    static keyUp(game, key) {

    }

    static keyDown(game, key) {
        if (key === 'w') {
            game.selectedTitle = (game.selectedTitle + 3) % 4
        }

        if (key === 's') {
            game.selectedTitle = (game.selectedTitle + 1) % 4
        }

        if (key === 'Enter') {
            if (game.selectedTitle === 0) {
                game.scene = 'village'
                game.state = ''
            } else if (game.selectedTitle === 1) {
                if (game.lang === 'en') {
                    game.lang = 'ko'
                } else {
                    game.lang = 'en'
                }
                game.locale = Locale.data[game.lang]
            }
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'village'
                game.state = ''
            } else if (Func.pointInsideRectUI(pos, UI.title.buttonLang)) {
                if (game.lang === 'en') {
                    game.lang = 'ko'
                } else {
                    game.lang = 'en'
                }
                game.locale = Locale.data[game.lang]
            }
        }
    }
}
