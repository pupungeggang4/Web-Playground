let img = {
    crystal: {
        1: new Image(), 2: new Image(), 3: new Image(), 4: new Image(),
        5: new Image(), 6: new Image(), 7: new Image(), 8: new Image(),
    },

    button: {
        play: new Image(),
        pause: new Image(),
        battle: new Image(),
    },

    selectFrame160: new Image(),
    selectFrame200: new Image()
}

function imageLoad() {
    img.crystal[1].src = 'image/crystalnormal.png'
    img.crystal[2].src = 'image/crystalfire.png'
    img.crystal[3].src = 'image/crystalwater.png'
    img.crystal[4].src = 'image/crystalwind.png'
    img.crystal[5].src = 'image/crystalearth.png'
    img.crystal[6].src = 'image/crystallight.png'
    img.crystal[7].src = 'image/crystaldark.png'
    img.crystal[8].src = 'image/crystalrainbow.png'

    img.button.play.src = 'image/buttonplay.png'
    img.button.pause.src = 'image/buttonpause.png'
    img.button.battle.src = 'image/buttonbattle.png'

    img.selectFrame160.src = 'image/selectframe160.png'
    img.selectFrame200.src = 'image/selectframe200.png'
}

