class Img {
    static arrowDown = new Image()
    static arrowUp = new Image()
    static arrowBack = new Image()
    static buttonMenu = new Image()

    static life = new Image()
    static energy = new Image()
    static portal = new Image()

    static load() {
        Img.arrowDown.src = 'image/arrowdown.png'
        Img.arrowUp.src = 'image/arrowup.png'
        Img.arrowBack.src = 'image/arrowback.png'
        Img.buttonMenu.src = 'image/buttonmenu.png'

        Img.life.src = 'image/life.png'
        Img.energy.src = 'image/energy.png'
        Img.portal.src = 'image/portal.png'
    }
}
