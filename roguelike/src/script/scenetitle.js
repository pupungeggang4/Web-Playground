class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.fillTextUI(game.ctx, game.locale.gameName, UI.title.textTitle)
        Render.fillTextUI(game.ctx, game.locale.startGame, UI.title.textStart)
        Render.fillTextUI(game.ctx, game.locale.collection, UI.title.textCollection)
        Render.fillTextUI(game.ctx, game.locale.eraseData, UI.title.textErase)
        
        Render.drawImageUI(game.ctx, Img.arrow, UI.title.arrow[game.selectedTitle])
    }

    static keyUp(game, key) {

    }

    static keyDown(game, key) {
        if (key === 'ArrowUp') {
            game.selectedTitle = (game.selectedTitle + 2) % 3
        }

        if (key === 'ArrowDown') {
            game.selectedTitle = (game.selectedTitle + 1) % 3
        }

        if (key === 'Enter') {
            if (game.selectedTitle === 0) {
                game.scene = 'village'
                game.state = ''
            }
        }
    }
}
