class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.mech = [new Wall(), new Wall(), new Belt()]
        this.unit = [new Coin(), new Coin()]
        this.mech[0].rect = new Rect2(0, 160, 160, 40)
        this.mech[1].rect = new Rect2(320, 160, 160, 40)
        this.mech[2].rect = new Rect2(-320, 160, 160, 40)
        this.unit[0].rect.pos.x = 120
        this.unit[1].rect.pos.x = 160
    }

    handleTick(game) {
        this.player.handleTick(game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y

        for (let i = 0; i < this.mech.length; i++) {
            this.mech[i].handleTick(game)
        }
        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].handleTick(game)
        }
    }

    render(game) {
        this.player.render(game)

        for (let i = 0; i < this.mech.length; i++) {
            this.mech[i].render(game)
        }
        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].render(game)
        }
    }
}
