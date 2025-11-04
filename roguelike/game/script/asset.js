class Img {
    static arrow = new Image()
    static arrowDown = new Image()
    static arrowBack = new Image()
    static buttonMenu = new Image()
    static attack = new Image()
    static dash = new Image()
    static player = new Image()
    static portal = new Image()

    static coin = new Image()
    static exporb = new Image()
    static life = new Image()
    static energy = new Image()

    static projectile = new Image()
    static unit = new Image()

    static imageLoad() {
        Img.arrow.src = 'image/arrow.png'
        Img.arrowDown.src = 'image/arrowdown.png'
        Img.arrowBack.src = 'image/arrowback.png'
        Img.buttonMenu.src = 'image/buttonmenu.png'
        Img.attack.src= 'image/attack.png'
        Img.dash.src = 'image/dash.png'
        Img.player.src = 'image/player.png'
        Img.portal.src = 'image/portal.png'

        Img.coin.src = 'image/coin.png'
        Img.exporb.src = 'image/exporb.png'
        Img.life.src = 'image/life.png'
        Img.energy.src = 'image/energy.png'

        Img.projectile.src = 'image/projectile/projectile.png'
        Img.unit.src = 'image/sprite/spriteunit.png'
    }
}
