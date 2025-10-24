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

        if (game.state === 'adventure_start') {
            Render.renderAdventureStart(game)
        }
    }

    static keyDown(game, key) {
        if (game.menu === false) {
            if (key === 'q' || key === 'Escape') {
                game.menu = true
            }

            if (game.state === 'adventure_start') {
                SceneBattle.handleAdventureStart(game, key)
            }
        } else {

        }
    }

    static keyUp(game, key) {

    }

    static handleAdventureStart(game, key) {
        if (key === 'ArrowLeft') {
            game.selectedAdventureStart = (game.selectedAdventureStart + 2) % 3
        } else if (key === 'ArrowRight') {
            game.selectedAdventureStart = (game.selectedAdventureStart + 1) % 3
        }

        if (key === 'Enter') {
            game.state = ''
            game.field.player.startBattle(game)
        }
    }
}
