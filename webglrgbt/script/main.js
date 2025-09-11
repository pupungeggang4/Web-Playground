window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let program

function main() {
    program = new Program()
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(program.programLoop)
    }
}

function rightClick() {
    return false
}
