window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let program

function main() {
    document.getElementById('fileinput').addEventListener('change', (e) => FileHandler.upload(e))
    program = new Program()
    program.run()
}

function errorHandle(err, url, line, col, obj) {

}

function rightClick() {
    return false
}