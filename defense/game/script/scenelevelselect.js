class SceneLevelSelect {
    static loop(game) {
        SceneLevelSelect.render(game)
    }

    static render(game) {
        Render.init(game)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.drawImageUI(game.ctx, Img.arrowBack, UI.levelSelect.buttonBack)
        Render.strokeRectUI(game.ctx, UI.levelSelect.buttonBack)
        Render.fillTextUI(game.ctx, `${game.locale.selectLevel} ${game.locale.level}:${game.pageLevel + 1}`, UI.levelSelect.textTitle)

        Render.strokeRectUI(game.ctx, UI.levelSelect.buttonPrev)
        Render.strokeRectUI(game.ctx, UI.levelSelect.buttonNext)

        for (let i = 0; i < 15; i++) {
            let row = Math.floor(i / 5)
            let col = i - row * 5
            let rect = [UI.levelSelect.buttonLevelStart[0] + UI.levelSelect.buttonLevelInterval[0] * col, UI.levelSelect.buttonLevelStart[1] + UI.levelSelect.buttonLevelInterval[1] * row, UI.levelSelect.buttonLevelSize[0], UI.levelSelect.buttonLevelSize[1]]
            Render.strokeRectUI(game.ctx, rect)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.levelSelect.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
            if (Func.pointInsideRectUI(pos, UI.levelSelect.buttonPrev)) {
                game.pageLevel = (game.pageLevel + 6) % 7
            }
            if (Func.pointInsideRectUI(pos, UI.levelSelect.buttonNext)) {
                game.pageLevel = (game.pageLevel + 1) % 7
            }
            for (let i = 0; i < 15; i++) {
                let row = Math.floor(i / 5)
                let col = i - row * 5
                let rect = [UI.levelSelect.buttonLevelStart[0] + UI.levelSelect.buttonLevelInterval[0] * col, UI.levelSelect.buttonLevelStart[1] + UI.levelSelect.buttonLevelInterval[1] * row, UI.levelSelect.buttonLevelSize[0], UI.levelSelect.buttonLevelSize[1]]
                if (Func.pointInsideRectUI(pos, rect)) {
                    game.scene = 'battle'
                    game.state = 'ready'
                    game.battle = new Battle()
                    let level = Data.levelList[game.pageLevel][i]
                    game.battle.level.setData(level)
                }
            }
        }
    }
}
