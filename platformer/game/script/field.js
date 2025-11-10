class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entityList = [new Wall(), new Wall(), new Belt(), new Coin(), new Coin()]
        this.entityList[0].rect = new Rect2(0, 160, 160, 40)
        this.entityList[1].rect = new Rect2(320, 160, 160, 40)
        this.entityList[2].rect = new Rect2(-320, 160, 160, 40)
        this.entityList[3].rect.pos.x = 120
        this.entityList[4].rect.pos.x = 160
    }

    handleTick(game) {
        this.player.handleTick(game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y

        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].handleTick(game)
        }
    }

    render(game) {
        this.player.render(game)

        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].render(game)
        }
    }
}
