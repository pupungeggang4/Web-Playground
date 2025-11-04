class UI {
    static title = {
        textTitle: [24, 24],
        buttonStart: [160, 160, 960, 80],
        textStart: [184, 184],
        buttonLang: [160, 240, 960, 80],
        textLang: [184, 264],
        buttonCollection: [160, 320, 960, 80],
        textCollection: [184, 344],
        buttonErase: [160, 400, 960, 80],
        textErase: [184, 424],

        arrow: [[80, 160], [80, 240], [80, 320], [80, 400]]
    }

    static village = {
        buttonMenu: [1180, 20, 80, 80],
        textControl: [24, 664],
    }

    static battle = {
        buttonMenu: [1180, 20, 80, 80],
        iconExp: [20, 40],
        textExp: [88, 50],
        barExp: [20, 20, 1140, 20],
        iconCoin: [20, 80],
        textCoin: [88, 90],
        iconHP: [20, 120],
        textHP: [88, 130],
        barHP: [80, 124, 140, 32],
        iconEnergy: [20, 160],
        textEnergy: [88, 170],
        barEnergy: [80, 164, 140, 32],

        descriptionRect: [200, 620, 320, 80],
        cardStart: [20, 440],
        cardSize: [160, 160],
        cardInterval: [0, -40],

        iconDash: [20, 620, 80, 80],
        iconAttack: [100, 620, 80, 80],
    }

    static windowAdventureConfirm = {
        rect: [320, 240, 640, 240],
        textTitle: [344, 264],
        buttonYes: [440, 360, 160, 80],
        textYes: [464, 384],
        buttonNo: [760, 360, 160, 80],
        textNo: [784, 384],
        arrow: [[360, 360], [680, 360]],
    }

    static window = {
        rect: [160, 40, 960, 640],
        textTitle: [184, 64],
        weapon: [[200, 240, 200, 200], [540, 240, 200, 200], [880, 240, 200, 200]],
        arrowWeapon: [[260, 120], [600, 120], [940, 120]],
        arrowReward: [],
        buttonOK: [560, 540, 160, 80],
        textOK: [584, 564],
    }

    static menuVillage = {
        rect: [320, 240, 640, 240],
        textPaused: [344, 264],
        buttonResume: [320, 320, 640, 80],
        textResume: [344, 344],
        buttonExit: [320, 400, 640, 80],
        textExit: [344, 424],
        arrow: [[240, 320], [240, 400]],
    }

    static menuBattle = {
        rect: [320, 200, 640, 320],
        textPaused: [344, 224],
        buttonResume: [320, 280, 640, 80],
        textResume: [344, 304],
        buttonSurrender: [320, 360, 640, 80],
        textSurrender: [344, 384],
        buttonExit: [320, 440, 640, 80],
        textExit: [344, 464],
        arrow: [[240, 280], [240, 360], [240, 440]]
    }
}
