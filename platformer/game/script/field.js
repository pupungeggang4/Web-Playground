class Field {
    constructor() {
        this.tile = []
        this.thing = []
        this.player = new FieldPlayer()
        this.camera = new Rect2(0, 0, 1280, 720)
    }
}
