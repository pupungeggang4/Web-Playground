class Scene {
    constructor(game) {
    }

    loop(game) {
        this.move(game)
        this.render(game)
    }

    render(game) {
        game.ctx.clearRect(0, 0, 1280, 720)
        game.ctx.fillStyle = 'white'
        game.ctx.fillRect(0, 0, 1280, 720)

        game.ctx.fillStyle = 'blue'
        game.ctx.fillRect(240, 200, 80, 80)
        game.ctx.fillRect(800, 320, 80, 80)
        game.ctx.fillStyle = 'green'
        game.ctx.fillRect(1040, 560, 80, 80)
        game.ctx.fillStyle = 'yellow'
        game.ctx.fillRect(80, 400, 80, 80)
        game.ctx.fillStyle = 'black'
        game.ctx.fillRect(game.cameraPos[0] - 40, game.cameraPos[1] - 40, 80, 80)

        game.ctxDark.clearRect(0, 0, 1280, 720)
        game.ctxDark.fillStyle = 'black'
        game.ctxDark.fillRect(0, 0, 1280, 720)
        game.ctxDark.save()
        game.ctxDark.beginPath()
        game.ctxDark.arc(game.cameraPos[0], game.cameraPos[1], game.sight, 0, Math.PI * 2, true)
        game.ctxDark.clip()
        game.ctxDark.clearRect(0, 0, 1280, 720)
        game.ctxDark.restore()
        game.ctx.drawImage(game.canvasDark, 0, 0)
    }

    move(game) {
        if (game.keyPressed['left']) {
            game.cameraPos[0] -= 320 * game.delta / 1000
        }
        if (game.keyPressed['right']) {
            game.cameraPos[0] += 320 * game.delta / 1000
        }
        if (game.keyPressed['up']) {
            game.cameraPos[1] -= 320 * game.delta / 1000
        }
        if (game.keyPressed['down']) {
            game.cameraPos[1] += 320 * game.delta / 1000
        }
    }
}
