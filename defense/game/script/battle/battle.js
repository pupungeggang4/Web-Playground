class Battle {
    constructor() {
        this.tempDeck = []
        this.level = new Level()
        this.player = new BattlePlayer()
        this.field = new Field()
    }

    startBattle(game) {
        this.field.startBattle(game)
        this.player.startBattle(game)
    }

    handleTick(game) {
        if (this.level.wave.length <= 0 && this.field.unit.length <= 0) {
            game.state = 'level_clear'
        }
        this.level.handleTick(game)
        this.player.handleTick(game)
        this.field.handleTick(game)
    }

    render(game) {
        this.field.render(game)
    }
}
