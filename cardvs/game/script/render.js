class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonReset)
        Render.fillTextUI(ctx, 'Reset', UI.menu.textReset)
    }

    static renderField(game, battle) {
        for (let i = 0; i < 14; i++) {
            Render.strokeRectUI(game.ctx, UI.field.unitList[i])
        }
    }

    static renderHand(game, battle) {
        for (let i = 0; i < 8; i++) {
            let rect = [UI.lower.handStart[0] + UI.lower.handInterval[0] * i, UI.lower.handStart[1] + UI.lower.handInterval[1] * i, UI.card.rect[2], UI.card.rect[3]]
            game.ctx.fillStyle = 'white'
            Render.fillRectUI(game.ctx, rect)
            Render.strokeRectUI(game.ctx, rect)
            game.ctx.fillSytle = 'black'
        }
    }

    static renderCrystal(game, battle) {
        for (let i = 0; i < 16; i++) {
            let row = Math.floor(i / 8)
            let col = i - row * 8
            let rect = [UI.lower.crystalStart[0] + UI.lower.crystalInterval[0] * col, UI.lower.crystalStart[1] + UI.lower.crystalInterval[1] * row, UI.lower.crystalSize[0], UI.lower.crystalSize[1]]
            Render.strokeRectUI(game.ctx, rect)
        }
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

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }
}
