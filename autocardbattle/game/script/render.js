class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.lineWidth = 2
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderField(ctx, game) {
        for (let i = 0; i < 10; i++) {
            if (game.battle.field[i] != null) {
                game.battle.field[i].render(ctx, game, UI.battle.unit[i])
            }

            Render.strokeRectUI(ctx, UI.battle.unit[i])
        }
    }

    static renderCrystal(ctx, game) {
        Render.strokeRectUI(ctx, UI.battle.playerCrystalBox)
        Render.strokeRectUI(ctx, UI.battle.enemyCrystalBox)
    }

    static renderCard(ctx, game) {
        for (let i = 4; i > -1; i--) {
            if (i < game.battle.player.deck.length) {
                let pos = [UI.battle.playerCardStart[0] + UI.battle.playerCardInterval[0] * i, UI.battle.playerCardStart[1]]
                game.battle.player.deck[i].render(ctx, pos)
            }
        }

        for (let i = 4; i > -1; i--) {
            if (i < game.battle.enemy.deck.length) {
                let pos = [UI.battle.enemyCardStart[0] + UI.battle.enemyCardInterval[0] * i, UI.battle.enemyCardStart[1]]
                game.battle.enemy.deck[i].render(ctx, pos)
            }
        }
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, 'Exit', UI.menu.textExit)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
