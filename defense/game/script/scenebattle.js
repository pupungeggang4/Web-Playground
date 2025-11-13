class SceneBattle {
    constructor(game) {
        
    }

    loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.battle.handleTick(game)
            }
        }
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.battle.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)
        game.battle.render(game)
        Render.renderBattleUI(game)

        if (game.state === 'ready') {
            Render.renderWindowReady(game)
        }

        if (game.state === 'game_over') {
            Render.renderWindowGameOver(game)
        }

        if (game.state === 'level_clear') {
            Render.renderWindowLevelClear(game)   
        }

        if (game.menu === true) {
            Render.renderMenu(game)
        }
    }

    mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }

                if (game.state === '') {
                    this.handleClickBattle(game, pos, button)
                } else if (game.state === 'ready') {
                    this.handleClickReady(game, pos, button)
                } else if (game.state === 'game_over') {
                    if (Func.pointInsideRectUI(pos, UI.windowSmall.buttonOK)) {
                        game.changeScene('title')
                        game.state = ''
                    }
                } else if (game.state === 'level_clear') {
                    if (Func.pointInsideRectUI(pos, UI.windowSmall.buttonOK)) {
                        game.changeScene('level_select')
                        game.state = ''
                    }
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu) || Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonRestart)) {
                    game.menu = false
                    game.battle.level.setData(game.battle.level.ID)
                    game.state = 'ready'
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonLevelSelect)) {
                    game.menu = false
                    game.changeScene('level_select')
                    game.state = ''
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.changeScene('title')
                    game.state = ''
                }
            }
        }
    }

    handleClickReady(game, pos, button) {
        if (Func.pointInsideRectUI(pos, UI.window.buttonOk)) {
            game.battle.startBattle(game)
            game.state = ''
        }
    }

    handleClickBattle(game, pos, button) {
        let field = game.battle.field
        let fieldPos = new Vec2(pos.x - field.camera.size.x / 2, pos.y - field.camera.size.y / 2)
        if (fieldPos.insideRect(field.rect)) {
            let row = Math.floor((fieldPos.y + field.rect.size.y / 2) / 80)
            let col = Math.floor((fieldPos.x + field.rect.size.x / 2) / 80)
            console.log(row, col)
        }
    }
}
