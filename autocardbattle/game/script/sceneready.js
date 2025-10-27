class SceneReady {
    static loop(game) {
        SceneReady.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Select Character', UI.ready.textTitle)
        Render.drawImageUI(game.ctx, Img.button.back, UI.ready.buttonBack)
        Render.strokeRectUI(game.ctx, UI.ready.buttonBack)

        for (let i = 0; i < 7; i++) {
            Render.drawImageUI(game.ctx, Img.icon[i], UI.ready.character[i])
            Render.strokeRectUI(game.ctx, UI.ready.character[i])
        }

        if (game.selectedCharacter != -1) {
            Render.drawImageUI(game.ctx, Img.selectFrame160, UI.ready.character[game.selectedCharacter])
        }

        Render.strokeRectUI(game.ctx, UI.ready.descriptionBox)
        if (game.selectedCharacter != -1) {
            let ID = game.selectedCharacter + 1
            for (let i = 0; i < Data.characterD[ID].length; i++) {
                let pos = [UI.ready.descriptionText[0], UI.ready.descriptionText[1] + UI.ready.descriptionText[3] * i]
                Render.fillTextUI(game.ctx, Data.characterD[ID][i], pos)
            }
        }

        Render.strokeRectUI(game.ctx, UI.ready.buttonStart)
        Render.fillTextUI(game.ctx, 'Start', UI.ready.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.ready.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 7; i++) {
                if (Func.pointInsideRectUI(pos, UI.ready.character[i])) {
                    game.selectedCharacter = i
                }
            }

            if (Func.pointInsideRectUI(pos, UI.ready.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'battle'
                    game.state = 'next'
                    game.menu = false

                    let characterID = game.selectedCharacter + 1
                    game.adventure.adventureStart()
                    game.player.createCharacter(characterID)
                    game.battle = new Battle()
                }
            }
        }
    }
}
