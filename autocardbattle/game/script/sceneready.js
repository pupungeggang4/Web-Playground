class SceneReady {
    static loop(game) {
        SceneReady.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Select Character', UI.ready.textTitle)
        Render.strokeRectUI(game.ctx, UI.ready.buttonBack)

        for (let i = 0; i < 4; i++) {
            Render.strokeRectUI(game.ctx, UI.ready.character[i])
        }

        game.ctx.strokeStyle = 'lime'
        if (game.selectedCharacter != -1) {
            Render.strokeRectUI(game.ctx, UI.ready.character[game.selectedCharacter])
        }
        game.ctx.strokeStyle = 'black'

        Render.strokeRectUI(game.ctx, UI.ready.buttonStart)
        Render.fillTextUI(game.ctx, 'Start', UI.ready.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.ready.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 4; i++) {
                if (pointInsideRectUI(pos, UI.ready.character[i])) {
                    game.selectedCharacter = i
                }
            }

            if (pointInsideRectUI(pos, UI.ready.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'battle'
                    game.state = ''
                    game.menu = false
                }
            }
        }
    }
}
