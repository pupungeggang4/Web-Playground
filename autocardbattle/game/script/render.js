class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.lineWidth = 2
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderField(ctx, game) {
        for (let i = 0; i < 10; i++) {
            if (game.battle.field[i] != null) {
                game.battle.field[i].render(ctx, game, UI.battle.unit[i])
            }

            Render.strokeRectUI(ctx, UI.battle.unit[i])
        }
    }

    static renderCrystal(ctx, game) {
        Render.strokeRectUI(ctx, UI.battle.playerCrystalBox)

        for (let i = 0; i < game.battle.player.crystalHand.length; i++) {
            let row = Math.floor(i / 4)
            let col = i - row * 4
            let pos = [UI.battle.playerCrystalStart[0] + UI.battle.playerCrystalInterval[0] * col, UI.battle.playerCrystalStart[1] + UI.battle.playerCrystalInterval[1] * row]
            game.battle.player.crystalHand[i].render(ctx, pos)
        }

        for (let i = 0; i < game.battle.enemy.crystalHand.length; i++) {
            let row = Math.floor(i / 4)
            let col = i - row * 4
            let pos = [UI.battle.enemyCrystalStart[0] + UI.battle.enemyCrystalInterval[0] * col, UI.battle.enemyCrystalStart[1] + UI.battle.enemyCrystalInterval[1] * row]
            game.battle.enemy.crystalHand[i].render(ctx, pos)
        }

        Render.strokeRectUI(ctx, UI.battle.enemyCrystalBox)
    }

    static renderCard(ctx, game) {
        for (let i = 4; i > -1; i--) {
            if (i < game.battle.player.deck.length) {
                let pos = [UI.battle.playerCardStart[0] + UI.battle.playerCardInterval[0] * i, UI.battle.playerCardStart[1]]
                game.battle.player.deck[i].render(ctx, pos)
            }
        }

        for (let i = 4; i > -1; i--) {
            if (i < game.battle.enemy.deck.length) {
                let pos = [UI.battle.enemyCardStart[0] + UI.battle.enemyCardInterval[0] * i, UI.battle.enemyCardStart[1]]
                game.battle.enemy.deck[i].render(ctx, pos)
            }
        }
    }

    static renderRewardWindow(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.window.rect)
        Render.strokeRectUI(ctx, UI.window.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Select Reward', UI.window.textTitle)
        for (let i = 0; i < 3; i++) {
            game.adventure.rewardItem[i].render(ctx, UI.window.buttonReward[i])
        }
        if (game.adventure.rewardSelected != -1) {
            Render.drawImageUI(ctx, Img.selectFrameLong, UI.window.buttonReward[game.adventure.rewardSelected])
        }
        Render.strokeRectUI(ctx, UI.window.buttonConfirm)
        Render.fillTextUI(ctx, 'Confirm', UI.window.textConfirm)
    }

    static renderNextWindow(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.window.rect)
        Render.strokeRectUI(ctx, UI.window.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Select', UI.window.textTitle)
        for (let i = 0; i < 3; i++) {
            Render.strokeRectUI(ctx, UI.window.buttonNext[i])
            let cell = game.adventure.layout[game.adventure.round][i]
            if (cell === 'battle') {
                Render.drawImageUI(ctx, Img.button.battle, UI.window.buttonNextImage[i])
                Render.fillTextUI(ctx, 'Battle', UI.window.buttonNextText[i])
            }
        }

        if (game.adventure.nextSelected != -1) {
            Render.drawImageUI(ctx, Img.selectFrameLong, UI.window.buttonNextImage[game.adventure.nextSelected])
        }

        Render.strokeRectUI(ctx, UI.window.buttonConfirm)
        Render.fillTextUI(ctx, 'Confirm', UI.window.textConfirm)
    }

    static renderWinWindow(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.windowEnd.rect)
        Render.strokeRectUI(ctx, UI.windowEnd.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'You win', UI.windowEnd.textTitle)
        Render.strokeRectUI(ctx, UI.windowEnd.buttonOK)
        Render.fillTextUI(ctx, 'OK', UI.windowEnd.textOK)
    }

    static renderLoseWindow(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.windowEnd.rect)
        Render.strokeRectUI(ctx, UI.windowEnd.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'You lose', UI.windowEnd.textTitle)
        Render.strokeRectUI(ctx, UI.windowEnd.buttonOK)
        Render.fillTextUI(ctx, 'OK', UI.windowEnd.textOK)
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, 'Exit', UI.menu.textExit)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
