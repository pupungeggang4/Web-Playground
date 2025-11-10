class SceneBattle {
    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        if (game.state === 'next') {
            Render.renderNextWindow(game.ctx, game)
        }

        if (game.menu === true) {
            Render.renderMenu(game.ctx, game)
        }
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                }
            }
        }
    }
}
