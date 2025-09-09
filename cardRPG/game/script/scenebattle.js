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
    }

    static keyDown(game, key) {
    }

    static keyUp(game, key) {

    }

    static mouseUp(game, pos, button) {

    }

    static mouseDown(game, pos, button) {

    }
}
