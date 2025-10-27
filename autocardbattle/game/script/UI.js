class UI {
    static title = {
        textTitle: [24, 24],
        buttonStart: [160, 160, 960, 80],
        textStart: [184, 184],
        buttonCollection: [160, 240, 960, 80],
        textCollection: [184, 264],
    }

    static ready = {
        textTitle: [24, 24],
        buttonBack: [1180, 20, 80, 80],
        character: [[20, 140, 160, 160], [220, 140, 160, 160], [420, 140, 160, 160], [20, 340, 160, 160], [220, 340, 160, 160], [420, 340, 160, 160], [20, 540, 160, 160]],
        buttonStart: [1100, 620, 160, 80],
        textStart: [1124, 644],

        descriptionBox: [700, 140, 560, 360],
        descriptionText: [704, 144, 0, 40],
    }

    static battle = {
        textTurn: [24, 24],
        textTurnWho: [24, 64],
        buttonMenu: [1180, 20, 80, 80],

        unit: [
            [20, 110, 160, 160], [200, 20, 160, 160], [200, 200, 160, 160], [380, 20, 160, 160], [380, 200, 160, 160],
            [1100, 110, 160, 160], [920, 20, 160, 160], [920, 200, 160, 160], [740, 20, 160, 160], [740, 200, 160, 160]
        ],

        playerCardStart: [360, 420],
        playerCardInterval: [-40, 0],
        enemyCardStart: [720, 420],
        enemyCardInterval: [40, 40],

        playerCrystalBox: [20, 420, 160, 280],
        playerCrystalStart: [20, 420],
        playerCrystalInterval: [40, 40],
        enemyCrystalBox: [1100, 420, 160, 280],
        enemyCrystalStart: [1100, 420],
        enemyCrystalInterval: [40, 40],

        buttonPlay: [560, 20, 80, 80],
        buttonPause: [640, 20, 80, 80],
        buttonProceed: [560, 280, 160, 80],
        textProceed: [584, 304],
    }

    static card = {
        rect: [0, 0, 200, 280],
        crystalStart: [0, 0],
        crystalTextStart: [44, 4],
        crystalInterval: [60, 0],
        crystalSize: [40, 40],
        image: [60, 40, 80, 80],
        textName: [4, 124],
        textDescription: [4, 144, 0, 20],
        textAttack: [4, 244],
        textHP: [164, 244]
    }

    static unit = {
        rect: [0, 0, 160, 160],
        image: [40, 40],
        textAttack: [4, 124],
        textHP: [124, 124],
        textArmor: [124, 84]
    }

    static window = {
        rect: [160, 40, 960, 640],
        textTitle: [164, 44],
        buttonReward: [[200, 160, 200, 280], [540, 160, 200, 280], [880, 160, 200, 280]],
        buttonNext: [[200, 160, 200, 280], [540, 160, 200, 280], [880, 160, 200, 280]],
        buttonNextImage: [[200, 160], [540, 160], [880, 160]],
        buttonNextText: [[204, 364], [544, 364], [884, 364]],
        buttonConfirm: [560, 560, 160, 80],
        textConfirm: [584, 584],
    }

    static windowEnd = {
        rect: [320, 240, 640, 240],
        textTitle: [344, 264],
        buttonOK: [760, 360, 160, 80],
        textOK: [784, 384],
    }

    static menu = {
        rect: [320, 240, 640, 240],
        textPaused: [344, 264],
        buttonResume: [320, 320, 640, 80],
        textResume: [344, 344],
        buttonExit: [320, 400, 640, 80],
        textExit: [344, 424],
    }

    static collection = {
        textTitle: [24, 24],
        buttonBack: [1180, 20, 80, 80],
        tab: [
            [20, 60, 120, 40], [140, 60, 120, 40], [260, 60, 120, 40], [380, 60, 120, 40], [500, 60, 120, 40], [620, 60, 120, 40], [740, 60, 120, 40]
        ],
        tabIcon: [
            [60, 60], [180, 60], [300, 60], [420, 60], [540, 60], [660, 60], [780, 60]
        ],
        cardStart: [20, 120],
        cardInterval: [200, 280],
    }
}
