class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entityList = [new Platform()]
    }

    handleTick(game) {

    }

    render(game) {
        this.player.render(game)

        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].render(game);
        }
    }
}
