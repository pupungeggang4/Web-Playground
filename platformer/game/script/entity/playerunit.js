class PlayerUnit extends Unit {
    constructor() {
        super()
        this.speed = 320.0
        this.gravity = 1200.0; this.terminalSpeed = 800.0; this.jumpPower = -600.0;
        this.ground = false
        this.velocity = new Vec2(0, 0)
        this.tempRect = new Rect2(0, 0, 80, 80)

        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = Img.player

        this.rigid = false
        this.floor = false
        this.fall = true
    }

    handleTick(game) {
        this.movePlayer(game)
    }

    movePlayer(game) {
        this.ground = false

        this.velocity.x = 0
        if (game.keyPressed['left'] === true) {
            this.velocity.x -= 1
        }
        if (game.keyPressed['right'] === true) {
            this.velocity.x += 1
        }
        this.velocity.x *= this.speed
        this.rect.pos.x += this.velocity.x * game.delta / 1000
        this.handleCollideX(game)

        if (this.velocity.y < this.terminalSpeed) {
            this.velocity.y += this.gravity * game.delta / 1000
        }
        this.rect.pos.y += this.velocity.y * game.delta / 1000

        this.handleFall(game)
        this.handleCollideUp(game)
    }

    jump(game) {
        if (1) {
            this.velocity.y = this.jumpPower
            this.ground = false
        }
    }

    interactPortal(game) {
        let field = game.field
        for (let i = 0; i < field.portalList.length; i++) {
            let portal = field.portalList[i]
            if (Rect2.simpleCollisionCheck(this.rect, portal.rect)) {
                LevelLoader.loadLevel(game, Data.level[portal.destination])
                this.rect.pos = new Vec2(portal.warpPos.x, portal.warpPos.y)
                break
            }
        }
    }

    render(game) {
        let field = game.field
        Render.renderCenterCam(game.ctx, this.canvas, this.rect, field.camera)
    }
}
