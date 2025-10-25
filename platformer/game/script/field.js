class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entity = [new Coin(), new Coin()]
        this.entity[0].rect.pos.y = 160
        this.entity[1].rect.pos.y = 480
    }

    handleTick(game) {
        this.player.handleTick(game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y

        for (let i = 0; i < this.entity.length; i++) {
            this.entity[i].handleTick(game)
        }
    }

    render(game) {
        this.player.render(game)

        for (let i = 0; i < this.entity.length; i++) {
            this.entity[i].render(game)
        }
    }
}
