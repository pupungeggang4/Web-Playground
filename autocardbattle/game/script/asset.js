class Img {
    static crystal = {
        1: new Image(), 2: new Image(), 3: new Image(), 4: new Image(),
        5: new Image(), 6: new Image(), 7: new Image(), 8: new Image(),
    }

    static button = {
        play: new Image(),
        pause: new Image(),
        battle: new Image(),
    }

    static card = {
    }

    static hero = {
        1001: new Image(),
        1101: new Image()
    }

    static selectFrame160 = new Image()
    static selectFrame200 = new Image()

    static loadImage() {
        Img.crystal[1].src = 'image/crystalnormal.png'
        Img.crystal[2].src = 'image/crystalfire.png'
        Img.crystal[3].src = 'image/crystalwater.png'
        Img.crystal[4].src = 'image/crystalwind.png'
        Img.crystal[5].src = 'image/crystalearth.png'
        Img.crystal[6].src = 'image/crystallight.png'
        Img.crystal[7].src = 'image/crystaldark.png'
        Img.crystal[8].src = 'image/crystalrainbow.png'

        Img.button.play.src = 'image/buttonplay.png'
        Img.button.pause.src = 'image/buttonpause.png'
        Img.button.battle.src = 'image/buttonbattle.png'

        Img.selectFrame160.src = 'image/selectframe160.png'
        Img.selectFrame200.src = 'image/selectframe200.png'

        for (let i = 0; i < 1000; i++) {
            Img.card[i] = new Image()
        }

        Img.card[1].src = 'image/card/card001.png'
        Img.card[2].src = 'image/card/card002.png'
        Img.card[3].src = 'image/card/card003.png'
        Img.card[201].src = 'image/card/card201.png'

        Img.hero[1001].src = 'image/hero/hero1001.png'
        Img.hero[1101].src = 'image/hero/hero1101.png'
    }
}
