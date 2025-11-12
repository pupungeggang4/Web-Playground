class Physics {
    static checkCollisionUp(floor, target) {
        if (Math.abs(floor.pos.x - target.pos.x) < (floor.size.x / 2 + target.size.x / 2)) {
            if (target.pos.y < floor.pos.y) {
                return target.size.y / 2 + floor.size.y / 2 - (floor.pos.y - target.pos.y)
            }
        }
        return 0
    }

    static checkCollisionDown(floor, target) {
        if (Math.abs(floor.pos.x - target.pos.x) < (floor.size.x / 2 + target.size.x / 2)) {
            if (target.pos.y > floor.pos.y) {
                return target.size.y / 2 + floor.size.y / 2 + (floor.pos.y - target.pos.y)
            }
        }
        return 0
    }

    static checkCollisionLeft(floor, target) {
        if (Math.abs(floor.pos.y - target.pos.y) < (floor.size.y / 2 + target.size.y / 2)) {
            if (target.pos.x < floor.pos.x) {
                return target.size.x / 2 + floor.size.x / 2 - (floor.pos.x - target.pos.x)
            }
        }
        return 0
    }

    static checkCollisionRight(floor, target) {
        if (Math.abs(floor.pos.y - target.pos.y) < (floor.size.y / 2 + target.size.y / 2)) {
            if (target.pos.x > floor.pos.x) {
                return target.size.x / 2 + floor.size.x / 2 + (floor.pos.x - target.pos.x)
            }
        }
        return 0
    }
}
