class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    insideRect(rect) {
        return this.x > rect.pos.x - rect.size.x / 2 && this.x < rect.pos.x + rect.size.x / 2 && this.y > rect.pos.y - rect.size.y / 2 && this.y < rect.pos.y + rect.size.y / 2
    }

    length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    static sub(v1, v2) {
        return new Vec2(v1.x - v2.x, v1.y - v2.y)
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
