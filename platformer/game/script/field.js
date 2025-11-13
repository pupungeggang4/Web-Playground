class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entityList = []
        this.portalList = []
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
        for (let i = 0; i < this.entityList.length; i++) {
            this.entityList[i].render(game)
        }

        for (let i = 0; i < this.portalList.length; i++) {
            this.portalList[i].render(game)
        }

        this.player.render(game)
    }
}
