class SceneField {
    static loop(game) {
        SceneField.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        if (game.menu === true) {
            Render.renderMenu(game.ctx, game)
        }
    }

    static keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'Escape' || key === 'q') {
                game.menu = true
                game.selectedMenu = 0
            }
        } else if (game.menu === true) {
            if (key === 'Escape' || key === 'q') {
                game.menu = false
            }
            if (key === 'ArrowUp') {
                game.selectedMenu = (game.selectedMenu + 1) % 2
            }
            if (key === 'ArrowDown') {
                game.selectedMenu = (game.selectedMenu + 1) % 2
            }
            if (key === 'Enter') {
                if (game.selectedMenu === 0) {
                    game.menu = false
                } else if (game.selectedMenu === 1) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }

    static keyUp(game, key) {

    }
}
