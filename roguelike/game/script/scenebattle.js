class SceneBattle {
    static loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.field.handleTick(game)
            }
        }
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
        game.field.render(game)
    }

    static keyDown(game, key) {
        if (game.menu === false) {

        } else {

        }
    }

    static keyUp(game, key) {

    }
}
