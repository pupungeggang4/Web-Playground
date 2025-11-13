window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    document.getElementById('fileinput').addEventListener('change', (e) => FileHandler.upload(e))
}

function errorHandle(err, url, line, col, obj) {

}

function rightClick() {
    return false
}