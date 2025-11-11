class Unit extends Entity {
    constructor() {
        super()

        this.rigid = false
        this.floor = false
        this.fall = true
    }

    handleFall(game) {
        let entityList = game.field.entityList
        for (let i = 0; i < entityList.length; i++) {
            let entity = entityList[i]
            if ((entity.rigid === true || entity.floor === true) && entity != this) {
                let f = Physics.findUpOverlap(entity.rect, this.rect)
                if (f > 0) {
                    this.ground = true
                    this.velocity.y = 0
                    this.rect.pos.y -= f
                    entity.support(game, this)
                    break
                }
            }
        }
    }

    handleCollideUp(game) {
        let entityList = game.field.entityList
        for (let i = 0; i < entityList.length; i++) {
            let entity = entityList[i]
            if ((entity.rigid === true || entity.floor === true) && entity != this) {
                let f = Physics.findDownOverlap(entity.rect, this.rect)
                if (f > 0) {
                    this.velocity.y = 0
                    this.rect.pos.y += f
                    break
                }
            }
        }
    }

    handleCollideX(game) {
        let entityList = game.field.entityList
        for (let i = 0; i < entityList.length; i++) {
            let entity = entityList[i]
            if ((entity.rigid === true || entity.floor === true) && entity != this) {
                let left = Physics.findLeftOverlap(entity.rect, this.rect)
                if (left > 0) {
                    this.rect.pos.x -= left
                    break
                }
                let right = Physics.findRightOverlap(entity.rect, this.rect)
                if (right > 0) {
                    this.rect.pos.x += right
                    break
                }
            }
        }
    }
}
