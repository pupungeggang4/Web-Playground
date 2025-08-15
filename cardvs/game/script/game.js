class Game {
    constructor() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }
}