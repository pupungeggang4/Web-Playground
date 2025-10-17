class Village {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.player = new VillagePlayer()
        this.portalBattle = new VillagePortal()
        this.portalShop = new VillagePortal()
        this.portalBattle.rect.pos = new Vec2(0, -400)
        this.portalShop.rect.pos = new Vec2(400, 0)
    }

    handleTick(game) {
        this.player.handleTick(game)
        this.camera.pos.x = this.player.rect.pos.x
        this.camera.pos.y = this.player.rect.pos.y
    }

    render(ctx, game) {
        this.player.render(ctx, this, game)
        this.portalBattle.render(ctx, this, game)
        this.portalShop.render(ctx, this, game)
    }
}

class VillagePlayer {
    constructor() {
        this.speed = 320.0
        this.velocity = new Vec2(0, 0)
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        this.move(game)
    }

    move(game) {
        this.velocity.x = 0
        this.velocity.y = 0
        let xPressed = false
        let yPressed = false
        if (game.keyPressed['left'] === true) {
            this.velocity.x -= 1
            xPressed = true
        }
        if (game.keyPressed['right'] === true) {
            this.velocity.x += 1
            xPressed = true
        }
        if (game.keyPressed['up'] === true) {
            this.velocity.y -= 1
            yPressed = true
        }
        if (game.keyPressed['down'] === true) {
            this.velocity.y += 1
            yPressed = true
        }
        if (xPressed === true && yPressed === true) {
            this.velocity.mul(0.7)
        }
        this.rect.pos.x += this.velocity.x * this.speed * game.delta / 1000
        this.rect.pos.y += this.velocity.y * this.speed * game.delta / 1000
    }

    handleInteract(village, game) {
        if (Vec2.distance(village.portalBattle.rect.pos, this.rect.pos) < 80) {
            game.state = 'adventure_confirm'
            game.selectedAdventureStart = 0
        }
    }

    render(ctx, village, game) {
        Render.clearCanvas(this.canvas, this.ctx)
        Render.drawImageUI(this.ctx, Img.player, [0, 0])
        Render.drawCenterCam(ctx, this.canvas, this.rect, village.camera)
    }
}

class VillagePortal {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    render(ctx, village, game) {
        Render.clearCanvas(this.canvas, this.ctx)
        Render.drawImageUI(this.ctx, Img.portal, [0, 0])
        Render.drawCenterCam(ctx, this.canvas, this.rect, village.camera)
    }
}
