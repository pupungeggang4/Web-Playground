class SceneTitle {
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
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, game.locale.eraseData, UI.title.textErase)
        Render.drawImageUI(game.ctx, Img.arrow, UI.title.arrow[game.selectedTitle])
    }

    keyDown(game, key) {
        if (key === 'ArrowUp') {
            game.selectedTitle = (game.selectedTitle + 2) % 3
        }

        if (key === 'ArrowDown') {
            game.selectedTitle = (game.selectedTitle + 1) % 3
        }

        if (key === 'Enter') {
            if (game.selectedTitle === 0) {
                game.scene = new SceneField()
                game.state = ''
                game.field = new Field()
            } else if (game.selectedTitle === 1) {
                if (game.lang === 'ko') {
                    game.lang = 'en'
                } else {
                    game.lang = 'ko'
                }

                game.locale = Locale.data[game.lang]
            }
        }
    }

    keyUp(game, key) {

    }
}
