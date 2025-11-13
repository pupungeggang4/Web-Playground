class SceneField {
    constructor(game) {
        this.windowMenu = new WindowMenu(game)
    }

    loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.field.handleTick(game)
            }
        }
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        game.field.render(game)

        Render.drawImageUI(game.ctx, Img.icon.coin, UI.field.iconCoin)
        Render.fillTextUI(game.ctx, game.player.coin, UI.field.textCoin)

        if (game.menu === true) {
            this.windowMenu.render(game)
        }
    }

    keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'Escape' || key === 'q') {
                game.menu = true
                game.selectedMenu = 0
                this.windowMenu.renderStatic()
            }

            if (game.state === '') {
                this.handleKeyDownGame(game, key)
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
                    game.scene = new SceneTitle(game)
                    game.state = ''
                }
            }
        }
    }

    keyUp(game, key) {

    }

    handleKeyDownGame(game, key) {
        if (key === 'ArrowUp') {
            game.field.player.jump(game)
        }
        if (key === 'f') {
            game.field.player.interactPortal(game)
        }
    }
}
