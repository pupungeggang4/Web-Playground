window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    game = new Game()
    game.run()
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        try {
            cancelAnimationFrame(game.gameLoop)
        } catch {

        }
    }
}

function rightClick() {
    return false
}
