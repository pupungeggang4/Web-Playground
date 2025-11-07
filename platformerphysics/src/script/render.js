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

    static drawCenterCam(ctx, image, rect, cam) {
        ctx.drawImage(image, rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2)
    }

    static drawCenterCamPart(ctx, image, coord, rect, cam) {
        ctx.drawImage(image, coord[0], coord[1], rect.size.x, rect.size.y, rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2, rect.size.x, rect.size.y)
    }

    static drawCenterCamRepeat(ctx, image, step, rect, cam) {
        let start = [rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2, rect.size.x, rect.size.y]
        let numX = Math.floor(rect.size.x / step.x)
        let numY = Math.floor(rect.size.y / step.y)
        for (let i = 0; i < numY; i++) {
            for (let j = 0; j < numX; j++) {
                ctx.drawImage(image, start[0] + j * step.x, start[1] + i * step.y)
            }
        }
    }

    static strokeRectCenterCam(ctx, rect, cam, color = 'black') {
        ctx.strokeStyle = color
        ctx.strokeRect(rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2, rect.size.x, rect.size.y)
    }

    static fillRectCenterCam(ctx, rect, cam, color = 'black') {
        ctx.fillStyle = color
        ctx.fillRect(rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2, rect.size.x, rect.size.y)
    }
}
