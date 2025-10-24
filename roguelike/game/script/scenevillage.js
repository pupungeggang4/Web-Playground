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

        game.village.render(game)

        Render.fillTextUI(game.ctx, game.locale.control, UI.village.textControl)

        if (game.state === 'adventure_confirm') {
            Render.renderAdventureConfirm(game)
        }

        if (game.menu === true) {
            Render.renderMenuVillage(game)
        }
    }

    static keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'Escape' || key === 'q') {
                game.menu = true
                game.selectedMenu = 0
            }
            if (game.state === '') {
                if (key === 'x') {
                    game.village.player.handleInteract(game)
                }
            } else if (game.state === 'adventure_confirm') {
                SceneVillage.handleAdventureConfirm(game, key)
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

    static handleAdventureConfirm(game, key) {
        if (key === 'ArrowLeft') {
            game.selectedAdventureConfirm = (game.selectedAdventureConfirm + 1) % 2
        } else if (key === 'ArrowRight') {
            game.selectedAdventureConfirm = (game.selectedAdventureConfirm + 1) % 2
        } else if (key === 'Enter') {
            if (game.selectedAdventureConfirm === 0) {
                game.scene = 'battle'
                game.state = 'adventure_start'
                game.selectedAdventureStart = 0
            } else if (game.selectedAdventureConfirm === 1) {
                game.state = ''
            }
        }
    }
}
