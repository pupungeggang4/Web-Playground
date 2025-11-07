class Img {
    static sprite = {
        coin: new Image()
    }

    static texture = {
        stone: new Image()
    }

    static loadImage() {
        Img.sprite.coin.src = 'image/sprite/spritecoin.png'
        Img.texture.stone.src = 'image/texture/texturestone.png'
    }
}
