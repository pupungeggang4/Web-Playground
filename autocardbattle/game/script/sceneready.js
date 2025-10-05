class SceneReady {
    static loop(game) {
        SceneReady.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Select Character', UI.ready.textTitle)
        Render.strokeRectUI(game.ctx, UI.ready.buttonBack)

        for (let i = 0; i < 7; i++) {
            Render.strokeRectUI(game.ctx, UI.ready.character[i])
        }

        game.ctx.strokeStyle = 'lime'
        if (game.selectedCharacter != -1) {
            Render.strokeRectUI(game.ctx, UI.ready.character[game.selectedCharacter])
        }
        game.ctx.strokeStyle = 'black'
        
        Render.strokeRectUI(game.ctx, UI.ready.descriptionBox)
        if (game.selectedCharacter != -1) {
            let ID = game.selectedCharacter + 1
            for (let i = 0; i < dataCharacterD[ID].length; i++) {
                let pos = [UI.ready.descriptionText[0], UI.ready.descriptionText[1] + UI.ready.descriptionText[3] * i]
                Render.fillTextUI(game.ctx, dataCharacterD[ID][i], pos)
            }
        }

        Render.strokeRectUI(game.ctx, UI.ready.buttonStart)
        Render.fillTextUI(game.ctx, 'Start', UI.ready.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.ready.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 7; i++) {
                if (pointInsideRectUI(pos, UI.ready.character[i])) {
                    game.selectedCharacter = i
                }
            }

            if (pointInsideRectUI(pos, UI.ready.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'battle'
                    game.state = 'next'
                    game.menu = false

                    let characterID = game.selectedCharacter + 1
                    game.adventure.adventureStart()
                    game.player.createCharacter(characterID)
                }
            }
        }
    }
}
