class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    mul(n) {
        this.x *= n
        this.y *= n
    }

    static distance(v1, v2) {
        return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }

    overlap(rect) {
        return this.pos.x > rect.pos.x - rect.size.x / 2 - this.size.x / 2 && this.pos.x < rect.pos.x + rect.size.x / 2 + this.size.x / 2 && this.pos.y > rect.pos.y - rect.size.y / 2 - this.size.y / 2 && this.pos.y < rect.pos.y + rect.size.y / 2 + this.size.y / 2
    }

    static simpleCollisionCheck(rect1, rect2) {
        let rad1 = (rect1.size.x + rect1.size.y) / 4
        let rad2 = (rect2.size.x + rect2.size.y) / 4
        return Vec2.distance(rect1.pos, rect2.pos) < (rad1 + rad2)
    }
}
