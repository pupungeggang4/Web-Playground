class Battle {
    constructor() {
        this.tempDeck = []
        this.level = new Level()
        this.player = new BattlePlayer()
        this.field = new Field()

        this.stateClick = ''
        this.selectedHandIndex = -1
    }

    startBattle(game) {
        this.field.startBattle(game)
        this.player.startBattle(game)
        this.stateClick = ''
        this.selectedHandIndex = -1
    }

    handleTick(game) {
        if (this.level.wave.length <= 0 && this.level.unitQueue.length <= 0 && this.field.unitEnemy.length <= 0 && game.state === '') {
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
