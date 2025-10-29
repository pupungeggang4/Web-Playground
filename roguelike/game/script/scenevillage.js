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

        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.village.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.village.buttonMenu)

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

            if (key === 'w') {
                game.selectedMenuVillage = (game.selectedMenuVillage + 1) % 2
            }

            if (key === 's') {
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
        if (key === 'a') {
            game.selectedAdventureConfirm = (game.selectedAdventureConfirm + 1) % 2
        } else if (key === 'd') {
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

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.village.buttonMenu)) {
                    game.menu = true
                    game.selectedMenu = 0
                }

                if (game.state === '') {
                    game.village.player.handleInteract(game)
                } else if (game.state === 'adventure_confirm') {
                    if (Func.pointInsideRectUI(pos, UI.windowAdventureConfirm.buttonYes)) {
                        game.scene = 'battle'
                        game.state = 'adventure_start'
                        game.selectedAdventureStart = 0
                    } else if (Func.pointInsideRectUI(pos, UI.windowAdventureConfirm.buttonNo)) {
                        game.state = ''
                    }
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.village.buttonMenu) || Func.pointInsideRectUI(pos, UI.menuVillage.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menuVillage.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }
}
