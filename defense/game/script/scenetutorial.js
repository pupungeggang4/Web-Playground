class SceneTutorial {
    static loop(game) {
        SceneTutorial.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
    }

    static mouseUp(game, pos, button) {
        
    }
}