class SceneReady {
    static loop(game) {
        SceneReady.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.fillTextUI(game.ctx, Locale.data[game.lang].selectCharacter, UI.ready.textTitle)
        Render.strokeRectUI(game.ctx, UI.ready.buttonBack)

        for (let i = 0; i < UI.ready.character.length; i++) {
            Render.strokeRectUI(game.ctx, UI.ready.character[i])
        }

        Render.strokeRectUI(game.ctx, UI.ready.buttonStart)
        Render.fillTextUI(game.ctx, Locale.data[game.lang].startAdventure, UI.ready.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            for (let i = 0; i < UI.ready.character.length; i++) {
                if (Func.pointInsideRectUI(pos, UI.ready.character[i])) {
                    game.selectedCharacter = i
                }
            }
            if (Func.pointInsideRectUI(pos, UI.ready.buttonBack)) {
                game.scene = 'title'
            }
            if (Func.pointInsideRectUI(pos, UI.ready.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'battle'
                    game.state = 'next'
                }
            }
        }
    }
}
