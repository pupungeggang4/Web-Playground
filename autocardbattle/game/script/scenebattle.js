class SceneBattle {
    static loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.battle.handleTick(game)
            }
        }
        SceneBattle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, `Turn: ${game.battle.turn}`, UI.battle.textTurn)

        if (game.battle.turnWho === 0) {
            Render.fillTextUI(game.ctx, 'Your turn', UI.battle.textTurnWho)
        } else {
            Render.fillTextUI(game.ctx, 'Enemy turn', UI.battle.textTurnWho)
        }

        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)

        Render.renderField(game.ctx, game)
        Render.renderCard(game.ctx, game)
        Render.renderCrystal(game.ctx, game)

        Render.drawImageUI(game.ctx, Img.button.play, UI.battle.buttonPlay)
        Render.drawImageUI(game.ctx, Img.button.pause, UI.battle.buttonPause)
        Render.strokeRectUI(game.ctx, UI.battle.buttonProceed)
        Render.fillTextUI(game.ctx, 'Proceed', UI.battle.textProceed)

        if (game.state === 'win') {
            Render.renderWinWindow(game.ctx)
        }

        if (game.state === 'lose') {
            Render.renderLoseWindow(game.ctx)
        }

        if (game.state === 'reward') {
            Render.renderRewardWindow(game.ctx, game)
        }

        if (game.state === 'next') {
            Render.renderNextWindow(game.ctx, game)
        }

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Func.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }

                if (game.state === '') {
                    SceneBattle.handleNormalClick(game, pos, button)
                } else if (game.state === 'reward') {
                    SceneBattle.handleRewardClick(game, pos, button)
                } else if (game.state === 'next') {
                    SceneBattle.handleNextClick(game, pos, button)
                } else if (game.state === 'win') {
                    SceneBattle.handleWinClick(game, pos, button)
                }
            } else if (game.menu === true) {
                if (Func.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Func.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                    game.battle = new Battle()
                }
            }
        }
    }

    static handleNormalClick(game, pos, button) {
        if (Func.pointInsideRectUI(pos, UI.battle.buttonProceed)) {
            if (game.battle.paused === true) {
                game.battle.proceed(game)
            }
        }

        if (Func.pointInsideRectUI(pos, UI.battle.buttonPlay)) {
            game.battle.paused = false
        } else if (Func.pointInsideRectUI(pos, UI.battle.buttonPause)) {
            game.battle.paused = true
        }
    }

    static handleRewardClick(game, pos, button) {
        for (let i = 0; i < 3; i++) {
            if (Func.pointInsideRectUI(pos, UI.window.buttonReward[i])) {
                game.adventure.rewardSelected = i
            }
        }

        if (Func.pointInsideRectUI(pos, UI.window.buttonConfirm)) {
            if (game.adventure.rewardSelected != -1) {
                if (game.adventure.rewardType === 'card') {
                    game.player.deck.push(game.adventure.rewardItem[game.adventure.rewardSelected].clone())
                }
            }

            game.adventure.round += 1
            game.state = 'next'
            game.adventure.nextSelected = -1
        }
    }

    static handleNextClick(game, pos, button) {
        for (let i = 0; i < 3; i++) {
            if (Func.pointInsideRectUI(pos, UI.window.buttonNext[i])) {
                game.adventure.nextSelected = i
            }

            if (Func.pointInsideRectUI(pos, UI.window.buttonConfirm)) {
                if (game.adventure.nextSelected != -1) {
                    if (game.adventure.layout[game.adventure.round][game.adventure.nextSelected] === 'battle') {
                        game.state = ''
                        game.battle.startBattle(game)
                    }
                }
            }
        }
    }

    static handleWinClick(game, pos, button) {
        if (Func.pointInsideRectUI(pos, UI.windowEnd.buttonOK)) {
            if (game.adventure.round < game.adventure.layout.length) {
                game.state = 'reward'
                game.adventure.rewardSelected = -1
            } else {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
