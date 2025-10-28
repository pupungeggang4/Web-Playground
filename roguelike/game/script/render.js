class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static renderAdventureConfirm(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.windowAdventureConfirm.rect)
        Render.strokeRectUI(ctx, UI.windowAdventureConfirm.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.startAdventure, UI.windowAdventureConfirm.textTitle)
        Render.strokeRectUI(ctx, UI.windowAdventureConfirm.buttonYes)
        Render.fillTextUI(ctx, game.locale.yes, UI.windowAdventureConfirm.textYes)
        Render.strokeRectUI(ctx, UI.windowAdventureConfirm.buttonNo)
        Render.fillTextUI(ctx, game.locale.no, UI.windowAdventureConfirm.textNo)
        Render.drawImageUI(ctx, Img.arrow, UI.windowAdventureConfirm.arrow[game.selectedAdventureConfirm])
    }

    static renderMenuVillage(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuVillage.rect)
        Render.strokeRectUI(ctx, UI.menuVillage.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.paused, UI.menuVillage.textPaused)
        Render.strokeRectUI(ctx, UI.menuVillage.buttonResume)
        Render.fillTextUI(ctx, game.locale.resume, UI.menuVillage.textResume)
        Render.strokeRectUI(ctx, UI.menuVillage.buttonExit)
        Render.fillTextUI(ctx, game.locale.exit, UI.menuVillage.textExit)

        Render.drawImageUI(ctx, Img.arrow, UI.menuVillage.arrow[game.selectedMenuVillage])
    }

    static renderMenuBattle(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menuBattle.rect)
        Render.strokeRectUI(ctx, UI.menuBattle.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.paused, UI.menuBattle.textPaused)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonResume)
        Render.fillTextUI(ctx, game.locale.resume, UI.menuBattle.textResume)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonSurrender)
        Render.fillTextUI(ctx, game.locale.surrender, UI.menuBattle.textSurrender)
        Render.strokeRectUI(ctx, UI.menuBattle.buttonExit)
        Render.fillTextUI(ctx, game.locale.exit, UI.menuBattle.textExit)

        Render.drawImageUI(ctx, Img.arrow, UI.menuBattle.arrow[game.selectedMenuBattle])
    }

    static renderAdventureStart(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.window.rect)
        Render.strokeRectUI(ctx, UI.window.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, game.locale.selectWeapon, UI.window.textTitle)
        for (let i = 0; i < 3; i++) {
            Render.strokeRectUI(ctx, UI.window.weapon[i])
        }
        Render.drawImageUI(ctx, Img.arrowDown, UI.window.arrowWeapon[game.selectedAdventureStart])

        Render.strokeRectUI(ctx, UI.window.buttonOK)
        Render.fillTextUI(ctx, game.locale.ok, UI.window.textOK)
    }

    static renderUIBattle(game) {
        let player = game.field.player
        game.ctx.font = '24px neodgm'
        
        game.ctx.fillStyle = 'white'
        Render.fillRectUI(game.ctx, UI.battle.barExp)
        Render.fillRectUI(game.ctx, UI.battle.barHP)
        Render.fillRectUI(game.ctx, UI.battle.barEnergy)
        
        game.ctx.fillStyle = 'blue'
        Render.fillRectUI(game.ctx, [UI.battle.barExp[0], UI.battle.barExp[1], UI.battle.barExp[2] * player.exp / player.expMax, UI.battle.barExp[3]])
        game.ctx.fillStyle = 'lime'
        Render.fillRectUI(game.ctx, [UI.battle.barHP[0], UI.battle.barHP[1], UI.battle.barHP[2] * player.hp / player.hpMax, UI.battle.barHP[3]])
        game.ctx.fillStyle = 'orange'
        Render.fillRectUI(game.ctx, [UI.battle.barEnergy[0], UI.battle.barEnergy[1], UI.battle.barEnergy[2] * player.energy / player.energyMax, UI.battle.barEnergy[3]])

        Render.strokeRectUI(game.ctx, UI.battle.barExp)
        Render.strokeRectUI(game.ctx, UI.battle.barHP)
        Render.strokeRectUI(game.ctx, UI.battle.barEnergy)

        game.ctx.fillStyle = 'black'
        Render.drawImageUI(game.ctx, Img.exporb, UI.battle.iconExp)
        Render.fillTextUI(game.ctx, `Lv.${player.level} Exp:${player.exp}/${player.expMax}`, UI.battle.textExp)
        Render.drawImageUI(game.ctx, Img.coin, UI.battle.iconCoin)
        Render.fillTextUI(game.ctx, `${player.gold}`, UI.battle.textCoin)
        Render.drawImageUI(game.ctx, Img.life, UI.battle.iconHP)
        Render.fillTextUI(game.ctx, `${player.hp}/${player.hpMax}`, UI.battle.textHP)
        Render.drawImageUI(game.ctx, Img.energy, UI.battle.iconEnergy)
        Render.fillTextUI(game.ctx, `${player.energy}/${player.energyMax}`, UI.battle.textEnergy)

        Render.strokeRectUI(game.ctx, UI.battle.descriptionRect)
        
        for (let i = 0; i < 5; i++) {
            let rect = [UI.battle.cardStart[0] + UI.battle.cardInterval[0] * i, UI.battle.cardStart[1] + UI.battle.cardInterval[1] * i, UI.battle.cardSize[0], UI.battle.cardSize[1]]
            Render.strokeRectUI(game.ctx, rect)
        }

        game.ctx.font = '32px neodgm'
    }

    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }

    static drawCenterCam(ctx, image, rect, cam) {
        ctx.drawImage(image, rect.pos.x - rect.size.x / 2 - cam.pos.x + cam.size.x / 2, rect.pos.y - rect.size.y / 2 - cam.pos.y + cam.size.y / 2)
    }
}
