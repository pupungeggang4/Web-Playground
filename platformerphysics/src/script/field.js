class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new FieldPlayer()
        this.entityList = []
    }

    handleTick(game) {
        this.player.handleTick(game)
    }

    render(game) {
        this.player.render(game)

        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].render(game);
        }
    }
}
