class SceneAdventure {
    constructor() {
        
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)
    }

    mouseUp(game, pos, button) {
        
    }
}