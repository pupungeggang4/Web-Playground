class LevelLoader {
    static loadLevel(game, level) {
        let l = JSON.parse(JSON.stringify(level))
        let field = game.field
        field.player.rect.pos = new Vec2(l['start_pos'][0], l['start_pos'][1])
        field.entityList = []
        field.portalList = []

        for (let i = 0; i < l['entity'].length; i++) {
            let entity = l['entity'][i]

            if (entity[0] === 'coin') {
                let coin = new Coin()
                coin.rect.pos = new Vec2(entity[1][0], entity[1][1])
                field.entityList.push(coin)
            }
            if (entity[0] === 'wall') {
                let wall = new Wall()
                wall.rect = new Rect2(entity[1][0], entity[1][1], entity[1][2], entity[1][3])
                field.entityList.push(wall)
            }
            if (entity[0] === 'platform') {
                let platform = new Platform()
                platform.rect = new Rect2(entity[1][0], entity[1][1], entity[1][2], entity[1][3])
                field.entityList.push(platform)
            }
            if (entity[0] === 'belt') {
                let belt = new Belt()
                belt.rect = new Rect2(entity[1][0], entity[1][1], entity[1][2], entity[1][3])
                belt.scroll = entity[1][4]
                field.entityList.push(belt)
            }
        }

        for (let i = 0; i < l['portal'].length; i++) {
            let portal = new Portal()
            portal.destination = l['portal'][i][0]
            portal.rect = new Rect2(l['portal'][i][1][0], l['portal'][i][1][1], l['portal'][i][1][2], l['portal'][i][1][3])
            portal.warpPos = new Vec2(l['portal'][i][2][0], l['portal'][i][2][1])
            field.portalList.push(portal)
        }
    }
}
