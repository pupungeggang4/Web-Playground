class SceneMain {
    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        game.field.render(game)
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}