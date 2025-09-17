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

    static renderBattleField(game, ctx) {
        for (let i = 0; i < game.battle.field.length; i++) {
            for (let j = 0; j < game.battle.field[0].length; j++) {
                let rect = [UI.cellStart[0] + UI.cellSize[0] * j, UI.cellStart[1] + UI.cellSize[1] * i, UI.cellSize[0], UI.cellSize[1]]
                Render.strokeRectUI(ctx, rect)
            }
        }
    }

    static renderRight(game, ctx, player) {
        Render.strokeRectUI(game.ctx, UI.right.hpBar)
        Render.strokeRectUI(game.ctx, UI.right.hpIcon.concat([40, 40]))
        Render.fillTextUI(game.ctx, '60/60', UI.right.hpText)
        Render.strokeRectUI(game.ctx, UI.right.energyBar)
        Render.strokeRectUI(game.ctx, UI.right.energyIcon.concat([40, 40]))
        Render.fillTextUI(game.ctx, '60/60', UI.right.energyText)
        Render.strokeRectUI(game.ctx, UI.right.expBar)
        Render.strokeRectUI(game.ctx, UI.right.expIcon.concat([40, 40]))
        Render.fillTextUI(game.ctx, 'Lv.1 60/60', UI.right.expText)

        Render.strokeRectUI(ctx, UI.right.descriptionBox)

        for (let i = 0; i < 8; i++) {
            let rect = [UI.right.itemStart[0] + UI.right.itemSize[0] * i, UI.right.itemStart[1], UI.right.itemSize[0], UI.right.itemSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        for (let i = 0; i < 8; i++) {
            let rect = [UI.right.handStart[0] + UI.right.handInterval[0] * i, UI.right.handStart[1], UI.card.rect[2], UI.card.rect[3]]
            Render.strokeRectUI(ctx, rect)
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
