class SceneVillage {
    static loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.village.handleTick(game)
            }
        }
        SceneVillage.render(game)
    }
    
    static render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        game.village.render(game.ctx, game)

        if (game.menu === true) {
            Render.renderMenuVillage(game.ctx, game)
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
                game.selectedMenuVillage = (game.selectedMenuVillage + 1) % 2
            }

            if (key === 'ArrowDown') {
                game.selectedMenuVillage = (game.selectedMenuVillage + 1) % 2
            }

            if (key === 'Enter') {
                if (game.selectedMenuVillage === 0) {
                    game.menu = false
                } else if (game.selectedMenuVillage === 1) {
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
