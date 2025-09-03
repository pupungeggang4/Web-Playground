class SceneField {
    static loop(game) {
        SceneField.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (game.state === '') {
                    
                }
            }
        }
    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
