info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let timeintervul = 1000
let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(15, 60)
controller.moveSprite(ship, 0, 100)
ship.setStayInScreen(true)


game.onUpdateInterval(timeintervul, function() {
    let rock = sprites.create(img`
        . . . . . . . . b b b b b . . .
        . . . . . . b b d d d d b b . .
        . . . . . b d d d d d d d c . .
        . . . . c d d d d d d d d c . .
        . . . c b d d d d d d d b c c .
        . . . c b b d d d d b c c c c .
        . . c c d b b b c c c c c c c .
        . . c c c d d d d c c d d d c c
        . c d b c c b b c c d d d d d c
        . c b d d b b b c c d d d d d c
        . c c b b b b c b c b d d d b c
        c b b c c c c c b b b b b c c c
        c c b b c c c c c d d d d d b c
        c c c c c c b b b b b c c c c c
        c c c c c c c b b b b b c c c c
        c c c c c c c c b b b b b c c c
    `, SpriteKind.Enemy)
    rock.setPosition (160, randint (0, 120))
    rock.vx = -50
rock.setFlag(SpriteFlag.AutoDestroy, true)
if (info.score()<= 10) {
rock.vx = -65
controller.moveSprite(ship, 0, 100)
}
else if (info.score() >=11 && info.score() <=20 ) {
rock.vx = -80
timeintervul = 800
controller.moveSprite(ship, 0, 150)
}
else if (info.score() >=21 && info.score() <=30 ) {
rock.vx = -100
timeintervul = 300
controller.moveSprite(ship, 0, 200)
}
else if (info.score() >=31 && info.score() <=40 ) {
rock.vx = -120
timeintervul = 200
controller.moveSprite(ship, 0, 250)
}
else if (info.score() >=41 && info.score() <=50 ) {
rock.vx = -130
timeintervul = 100
controller.moveSprite(ship, 0, 300)
}
else if (info.score() >=50 ) { rock.vx = -150
controller.moveSprite(ship, 0, 350) 
timeintervul = 50
}
})
sprites.onDestroyed(SpriteKind.Enemy, function(sprite: Sprite) {
    info.changeScoreBy(1)
})
