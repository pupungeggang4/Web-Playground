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
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, game.locale.adventure, UI.title.textAdventure)
        Render.strokeRectUI(game.ctx, UI.title.buttonAdventure)
        Render.fillTextUI(game.ctx, game.locale.tutorial, UI.title.textTutorial)
        Render.strokeRectUI(game.ctx, UI.title.buttonTutorial)
        Render.fillTextUI(game.ctx, game.locale.collection, UI.title.textCollection)
        Render.strokeRectUI(game.ctx, UI.title.buttonCollection)
        Render.fillTextUI(game.ctx, game.locale.lang, UI.title.textLang)
        Render.strokeRectUI(game.ctx, UI.title.buttonLang)
        Render.fillTextUI(game.ctx, game.locale.eraseData, UI.title.textErase)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (Func.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'level_select'
                game.state = ''
                game.pageLevel = 0
            }
            if (Func.pointInsideRectUI(pos, UI.title.buttonAdventure)) {
                game.scene = 'adventure'
                game.state = 'adventure_start'
            }
            if (Func.pointInsideRectUI(pos, UI.title.buttonTutorial)) {
                game.scene = 'tutorial'
                game.state = 'break'
                game.tutorialPhase = 'welcome'
            }
            if (Func.pointInsideRectUI(pos, UI.title.buttonCollection)) {

            }
            if (Func.pointInsideRectUI(pos, UI.title.buttonLang)) {
                game.lang = (game.lang + 1) % Locale.langList.length
                game.locale = Locale.data[Locale.langList[game.lang]]
            }
            if (Func.pointInsideRectUI(pos, UI.title.buttonErase)) {

            }
        }
    }
}
