class SceneTitle {
    constructor(game) {
        
    }
    
    loop(game) {
        this.render(game)
    }

    render(game) {
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

    keyUp(game, key) {

    }

    keyDown(game, key) {
        if (key === 'w') {
            game.selectedTitle = (game.selectedTitle + 3) % 4
        }

        if (key === 's') {
            game.selectedTitle = (game.selectedTitle + 1) % 4
        }

        if (key === 'Enter') {
            if (game.selectedTitle === 0) {
                game.changeScene('village')
                game.state = ''
                game.village = new Village()
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

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.changeScene('village')
                game.state = ''
                game.village = new Village()
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
