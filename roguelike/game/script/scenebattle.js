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
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        game.field.render(game)
        Render.renderUIBattle(game)

        Render.drawImageUI(game.ctx, Img.buttonMenu, UI.battle.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        if (game.state === 'adventure_start') {
            Render.renderAdventureStart(game)
        }

        if (game.menu === true) {
            Render.renderMenuBattle(game)
        }
    }

    static keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'q' || key === 'Escape') {
                game.menu = true
                game.selectedMenuBattle = 0
            }

            if (game.state === 'adventure_start') {
                SceneBattle.handleKeyAdventureStart(game, key)
            } else if (game.state === '') {
                SceneBattle.handleKeyBattle(game, key)
            }
        } else if (game.menu === true) {
            if (key === 'q' || key === 'Escape') {
                game.menu = false
            }
            if (key === 'w') {
                game.selectedMenuBattle = (game.selectedMenuBattle + 2) % 3
            } else if (key === 's') {
                game.selectedMenuBattle = (game.selectedMenuBattle + 1) % 3
            } else if (key === 'Enter') {
                if (game.selectedMenuBattle === 0) {
                    game.menu = false
                } else if (game.selectedMenuBattle === 1) {
                    game.menu = false
                    game.scene = 'village'
                    game.state = ''
                } else if (game.selectedMenuBattle === 2) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }

    static keyUp(game, key) {

    }

    static handleKeyAdventureStart(game, key) {
        if (key === 'a') {
            game.selectedAdventureStart = (game.selectedAdventureStart + 2) % 3
        } else if (key === 'd') {
            game.selectedAdventureStart = (game.selectedAdventureStart + 1) % 3
        }

        if (key === 'Enter') {
            game.state = ''
            game.field.player.startBattle(game)
        }
    }

    static handleKeyBattle(game, key) {
        if (key === ' ') {
            game.field.player.dash(game)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                    game.selectedMenuBattle = 0
                }
                if (game.state === '') {
                    SceneBattle.handleMouseBattle(game, pos)
                } else if (game.state === 'adventure_start') {
                    SceneBattle.handleMouseAdventureStart(game, pos)
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.menuBattle.buttonResume) || Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menuBattle.buttonSurrender)) {
                    game.menu = false
                    game.scene = 'village'
                    game.state = ''
                } else if (Func.pointInsideRectUI(pos, UI.menuBattle.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }

    static handleMouseAdventureStart(game, pos) {
        for (let i = 0; i < 3; i++) {
            if (Func.pointInsideRectUI(pos, UI.window.weapon[i])) {
                game.selectedAdventureStart = i
            }
        }

        if (Func.pointInsideRectUI(pos, UI.window.buttonOK)) {
            game.state = ''
            game.field.player.startBattle(game)
        }
    }

    static handleMouseBattle(game, pos) {
        let camera = game.field.camera
        if (!(Func.pointInsideRectUI(pos, UI.battle.buttonMenu))) {
            let clickedPos = new Vec2(pos.x + camera.pos.x - camera.size.x / 2, pos.y + camera.pos.y - camera.size.y / 2)
            game.field.player.shoot(game, clickedPos)
        }
    }
}
