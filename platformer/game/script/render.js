class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderMenu(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.paused, UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, game.locale.resume, UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, game.locale.exit, UI.menu.textExit)

        Render.drawImageUI(ctx, Img.arrow, UI.menu.arrow[game.selectedMenu])
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

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }

    static renderCenterCam(ctx, img, rect, cam) {
        ctx.drawImage(img, rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2) 
    }
    
    static renderCenterCamPart(ctx, img, coord, rect, cam) {
        ctx.drawImage(img, coord[0], coord[1], rect.size.x, rect.size.y,
        rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2,
        rect.size.x, rect.size.y)
    }

    static renderTextureCenterCam(ctx, img, step, rect, cam) {
        let nx = rect.size.x / step.x
        let ny = rect.size.y / step.y
        let start = [rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2]

        for (let i = 0; i < ny; i++) {
            for (let j = 0; j < nx; j++) {
                ctx.drawImage(img, start[0] + step.x * j, start[1] + step.y * i)
            }
        }
    }
}
