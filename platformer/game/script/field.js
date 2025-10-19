class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new PlayerUnit()
        this.entity = [new Coin(), new Coin()]
        this.entity[1].rect.pos.x = -160
        this.wall = new Wall()
    }

    handleTick(game) {
        this.player.handleTick(this, game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y

        for (let i = 0; i < this.entity.length; i++) {
            this.entity[i].handleTick(this, game)
        }
    }

    render(ctx, game) {
        this.wall.render(ctx, this, game)
        this.player.render(ctx, this, game)

        for (let i = 0; i < this.entity.length; i++) {
            this.entity[i].render(ctx, this, game)
        }
    }
}
