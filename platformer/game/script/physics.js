class Physics {
    static findUpOverlap(floor, target) {
        if (Math.abs(floor.pos.x - target.pos.x) < (floor.size.x / 2 + target.size.x / 2)) {
            if (target.pos.y < floor.pos.y) {
                return target.size.y / 2 + floor.size.y / 2 - (floor.pos.y - target.pos.y)
            }
        }
        return 0
    }

    static findDownOverlap(base, target) {
        if (Math.abs(base.pos.x - target.pos.x) < (base.size.x / 2 + target.size.x / 2)) {
            if (target.pos.y > base.pos.y) {
                return target.size.y / 2 + base.size.y / 2 + (base.pos.y - target.pos.y)
            }
        }
        return 0
    }

    static findLeftOverlap(base, target) {
        if (Math.abs(base.pos.y - target.pos.y) < (base.size.y / 2 + target.size.y / 2)) {
            if (target.pos.x < base.pos.x) {
                return target.size.x / 2 + base.size.x / 2 - (base.pos.x - target.pos.x)
            }
        }
    }

    static findRightOverlap(base, target) {
        if (Math.abs(base.pos.y - target.pos.y) < (base.size.y / 2 + target.size.y / 2)) {
            if (target.pos.x > base.pos.x) {
                return target.size.x / 2 + base.size.x / 2 + (base.pos.x - target.pos.x)
            }
        }
    }
}
