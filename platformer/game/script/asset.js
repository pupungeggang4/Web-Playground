class Img {
    static arrow = new Image()
    static player = new Image()

    static icon = {
        coin: new Image()
    }

    static sprite = {
        coin: new Image()
    }

    static loadImage() {
        Img.arrow.src = 'image/arrow.png'
        Img.player.src = 'image/player.png'
        Img.icon.coin.src = 'image/iconcoin.png'
        Img.sprite.coin.src = 'image/sprite/spritecoin.png'
    }
}
