class SceneBattle {
    static loop(game) {
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
        
    }

    static keyDown(game, key) {
        if (game.menu === false) {

        } else {

        }
    }

    static keyUp(game, key) {

    }
}
