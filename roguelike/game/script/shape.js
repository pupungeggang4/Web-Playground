class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    size() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    normalized() {
        let size = this.size()
        return new Vec2(this.x / size, this.y / size)
    }

    mul(n) {
        this.x *= n
        this.y *= n
    }

    static sub(v1, v2) {
        return new Vec2(v1.x - v2.x, v1.y - v2.y)
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
}
