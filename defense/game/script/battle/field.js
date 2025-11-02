class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)

        this.unitPlayer = []
        this.unitEnemy = []
        this.proj = []
        this.layout = [
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block']
        ]
        this.portal = []
        this.endPoint = []

        this.rect = new Rect2(0, 0, 880, 320)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')

        for (let i = 0; i < 4; i++) {
            let tempPortal = new Portal()
            tempPortal.rect.pos.x = 400
            tempPortal.rect.pos.y = -120 + 80 * i
            this.portal.push(tempPortal)

            let tempEndPoint = new EndPoint()
            tempEndPoint.rect.pos.x = -400
            tempEndPoint.rect.pos.y = -120 + 80 * i
            this.endPoint.push(tempEndPoint)
        }
    }

    startBattle(game) {
        this.unitPlayer = []
        this.unitEnemy = []
        this.proj = []
        this.layout = [
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block']
        ]
    }

    addTower(game, i, j, tower) {
        let field = game.battle.field
        tower.rect.pos = new Vec2(-400 + 80 * j, -120 + 80 * i)
        this.layout[i][j] = tower
        field.unitPlayer.push(tower)
    }

    putTowerToDeck(game, i, j) {
        let player = game.battle.player
        if (this.layout[i][j] instanceof Tower) {
            let card = this.layout[i][j].toCard()
            this.unitPlayer.splice(this.unitPlayer.indexOf(this.layout[i][j]), 1)
            this.layout[i][j] = null
            player.deckUsed.push(card)
        }
    }

    handleTick(game) {
        for (let i = this.proj.length - 1; i >= 0; i--) {
            this.proj[i].handleTick(game)
        }

        for (let i = this.unitPlayer.length - 1; i >= 0; i--) {
            this.unitPlayer[i].handleTick(game)
        }

        for (let i = this.unitEnemy.length - 1; i >= 0; i--) {
            this.unitEnemy[i].handleTick(game)
        }

        for (let i = 0; i < this.endPoint.length; i++) {
            this.endPoint[i].handleTick(game)
        }
    }

    render(game) {
        this.ctx.clearRect(0, 0, 880, 320)

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 11; j++) {
                let rect = [j * 80, i * 80, 80, 80]
                Render.strokeRectUI(this.ctx, rect)
            }
        }

        Render.drawCenterCam(game.ctx, this.canvas, this.rect, this.camera)

        for (let i = 0; i < this.portal.length; i++) {
            this.portal[i].render(game)
        }

        for (let i = 0; i < this.endPoint.length; i++) {
            this.endPoint[i].render(game)
        }

        for (let i = 0; i < this.unitPlayer.length; i++) {
            this.unitPlayer[i].render(game)
        }

        for (let i = 0; i < this.unitEnemy.length; i++) {
            this.unitEnemy[i].render(game)
        }
        
        for (let i = 0; i <this.proj.length; i++) {
            this.proj[i].render(game)
        }
    }
}
