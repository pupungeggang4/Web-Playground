class Physics {
    static findUpOverlap(floor, target) {
        if (Math.abs(floor.pos.x - target.pos.x) < (floor.size.x / 2 + target.size.x / 2)) {
            if ((target.pos.y < floor.pos.y) && target.pos.y > (floor.pos.y - floor.size.y / 2 - target.size.y / 2)) {
                return target.size.y / 2 + floor.size.y / 2 - (floor.pos.y - target.pos.y)
            }
        }
        return 0
    }
}
