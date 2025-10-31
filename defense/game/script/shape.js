class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    insideRect(rect) {
        return this.x > rect.pos.x - rect.size.x / 2 && this.x < rect.pos.x + rect.size.x / 2 && this.y > rect.pos.y - rect.size.y / 2 && this.y < rect.pos.y + rect.size.y / 2
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
