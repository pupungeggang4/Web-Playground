class Render {
    static init(ctx) {
        ctx.font = '32px opensans'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderAdventureConfirm(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.windowAdventureConfirm.rect)
        Render.strokeRectUI(ctx, UI.windowAdventureConfirm.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.startAdventure, UI.windowAdventureConfirm.textTitle)
        Render.fillTextUI(ctx, game.locale.yes, UI.windowAdventureConfirm.textYes)
        Render.fillTextUI(ctx, game.locale.no, UI.windowAdventureConfirm.textNo)
        Render.drawImageUI(ctx, Img.arrow, UI.windowAdventureConfirm.arrow[game.selectedAdventureConfirm])
    }

    static renderMenuVillage(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuVillage.rect)
        Render.strokeRectUI(ctx, UI.menuVillage.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.paused, UI.menuVillage.textPaused)
        Render.strokeRectUI(ctx, UI.menuVillage.buttonResume)
        Render.fillTextUI(ctx, game.locale.resume, UI.menuVillage.textResume)
        Render.strokeRectUI(ctx, UI.menuVillage.buttonExit)
        Render.fillTextUI(ctx, game.locale.exit, UI.menuVillage.textExit)

        Render.drawImageUI(ctx, Img.arrow, UI.menuVillage.arrow[game.selectedMenuVillage])
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

    static drawCenterCam(ctx, image, rect, cam) {
        ctx.drawImage(image, rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2)
    }
}
