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

    static distance(v1, v2) {
        return Vec2.sub(v1, v2).length()
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }

    static simpleCollide(r1, r2) {
        let radius1 = (r1.size.x + r1.size.y) / 4
        let radius2 = (r2.size.x + r2.size.y) / 4
        return (radius1 + radius2) > Vec2.distance(r1.pos, r2.pos)
    }
}
