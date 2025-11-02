class Img {
    static arrowDown = new Image()
    static arrowUp = new Image()
    static arrowBack = new Image()
    static buttonMenu = new Image()
    static buttonUpgrade = new Image()
    static buttonBounce = new Image()

    static life = new Image()
    static energy = new Image()
    static portal = new Image()
    static unit = new Image()
    static tower = new Image()
    static projectile = new Image()
    static selectFrame80 = new Image()

    static load() {
        Img.arrowDown.src = 'image/arrowdown.png'
        Img.arrowUp.src = 'image/arrowup.png'
        Img.arrowBack.src = 'image/arrowback.png'
        Img.buttonMenu.src = 'image/buttonmenu.png'
        Img.buttonUpgrade.src = 'image/buttonupgrade.png'
        Img.buttonBounce.src = 'image/buttonbounce.png'

        Img.life.src = 'image/life.png'
        Img.energy.src = 'image/energy.png'
        Img.portal.src = 'image/portal.png'
        Img.unit.src = 'image/sprite/spriteunit.png'
        Img.tower.src = 'image/tower.png'
        Img.projectile.src = 'image/projectile.png'

        Img.selectFrame80.src = 'image/selectframe80.png'
    }
}
