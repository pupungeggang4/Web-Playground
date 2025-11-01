class Field {
    constructor() {
        this.camera = new Rect2(0, 0, 1280, 720)
        this.unit = []
        this.proj = []
        this.layout = [
            ['block', null, null, null, null, null, null, null, null, null, 'Block'],
            ['block', null, null, null, null, null, null, null, null, null, 'Block'],
            ['block', null, null, null, null, null, null, null, null, null, 'Block'],
            ['block', null, null, null, null, null, null, null, null, null, 'Block']
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
        this.unit = []
        this.proj = []
        this.layout = [
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block'],
            ['block', null, null, null, null, null, null, null, null, null, 'block']
        ]
    }

    handleTick(game) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 11; j++) {
                if (this.layout[i][j] != null && this.layout[i][j] != 'block') {
                    this.layout[i][j].handleTick(game)
                }
            }
        }

        for (let i = this.proj.length - 1; i >= 0; i--) {
            this.proj[i].handleTick(game)
        }

        for (let i = this.unit.length - 1; i >= 0; i--) {
            this.unit[i].handleTick(game)
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
                if (this.layout[i][j] != null && this.layout[i][j] != 'block') {
                    this.layout[i][j].render(game)
                }
            }
        }

        Render.drawCenterCam(game.ctx, this.canvas, this.rect, this.camera)

        for (let i = 0; i < this.portal.length; i++) {
            this.portal[i].render(game)
        }

       for (let i = 0; i <this.proj.length; i++) {
            this.proj[i].render(game)
        }

        for (let i = 0; i < this.endPoint.length; i++) {
            this.endPoint[i].render(game)
        }

        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].render(game)
        } 
    }
}
