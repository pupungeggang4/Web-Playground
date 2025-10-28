class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.fillStyle = 'black'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
    }

    static renderWindowReady(game) {
        let ctx = game.ctx

        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.window.rect)
        Render.strokeRectUI(ctx, UI.window.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.buildDeck, UI.window.textTitle)

        for (let i = 0; i < 10; i++) {
            let row = Math.floor(i / 5)
            let col = i % 5
            let rect = [UI.window.cardListStart[0] + UI.window.cardInterval[0] * col, UI.window.cardListStart[1] + UI.window.cardInterval[1] * row, UI.window.cardSize[0], UI.window.cardSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        for (let i = 0; i < 11; i++) {
            let rect = [UI.window.deckListStart[0] + UI.window.deckListInterval[0] * i, UI.window.deckListStart[1], UI.window.deckListSize[0], UI.window.deckListSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        Render.strokeRectUI(ctx, UI.window.buttonOk)
        Render.fillTextUI(ctx, game.locale.ok, UI.window.textOk)
    }

    static renderMenu(game) {
        let ctx = game.ctx

        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.paused, UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, game.locale.resume, UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonRestart)
        Render.fillTextUI(ctx, game.locale.restart, UI.menu.textRestart)
        Render.strokeRectUI(ctx, UI.menu.buttonLevelSelect)
        Render.fillTextUI(ctx, game.locale.levelSelect, UI.menu.textLevelSelect)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, game.locale.exit, UI.menu.textExit)
    }

    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
