class Img {
    static arrow = new Image()
    static arrowDown = new Image()
    static player = new Image()
    static portal = new Image()

    static coin = new Image()
    static exporb = new Image()

    static imageLoad() {
        Img.arrow.src = 'image/arrow.png'
        Img.arrowDown.src = 'image/arrowdown.png'
        Img.player.src = 'image/player.png'
        Img.portal.src = 'image/portal.png'

        Img.coin.src = 'image/coin.png'
        Img.exporb.src = 'image/exporb.png'
    }
}
