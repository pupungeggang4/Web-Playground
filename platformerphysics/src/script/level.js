class Level {
    static loadLevel(game, data) {
        let d = JSON.parse(JSON.stringify(data))
        let player = game.field.player
        let entityList = game.field.entityList

        player.rect.pos.x = d['start_pos'][0]
        player.rect.pos.y = d['start_pos'][1]

        for (let i = 0; i < d['entity'].length; i++) {
            let e = d['entity'][i]
            if (e[0] === 'wall') {
                let wall = new Wall()
                wall.rect = new Rect2(e[1][0], e[1][1], e[1][2], e[1][3])
                entityList.push(wall)
            }
            if (e[0] === 'coin') {
                let coin = new Coin()
                coin.rect.pos = new Vec2(e[1][0], e[1][1])
                entityList.push(coin)
            }
        }
    }
}
