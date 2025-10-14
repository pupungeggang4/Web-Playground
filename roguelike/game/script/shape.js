class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    mul(n) {
        this.x *= n
        this.y *= n
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
