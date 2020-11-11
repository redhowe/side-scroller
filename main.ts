scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true, effects.bubbles)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        music.jumpUp.play()
        music.jumpDown.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    music.powerUp.play()
    info.changeScoreBy(1)
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tiles.createTilemap(hex`3200080009000a0b000c0d0e0000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000800000000000000000000000800000000000000000000080000000000000000000000000000000000000000080006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060503020202010404040403020201040403020201040404030202020201040403020202020104040403020201040403020201`, img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    222222....2222..2222...222222..222222...2222..2222
    `, [myTiles.transparency16,sprites.builtin.oceanSand3,sprites.builtin.oceanSand2,sprites.builtin.oceanSand1,myTiles.tile2,sprites.builtin.oceanSand0,myTiles.tile4,myTiles.tile3,sprites.dungeon.collectibleBlueCrystal,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 7 7 7 7 7 f . . . 
    . 8 8 8 8 8 7 7 7 7 7 7 7 f . . 
    . 8 6 7 8 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 f 7 6 1 f 7 4 5 f . . 
    . . f 6 7 7 f 1 f f 7 5 5 c . . 
    f f e f 7 7 7 6 f 4 5 5 5 5 5 f 
    f e e 8 6 7 7 f 7 5 5 5 5 5 f . 
    f e e e 8 8 f 7 7 7 7 7 7 7 f . 
    f c e e e e e 7 7 7 7 7 7 7 f . 
    . f e e e e e e 7 7 7 7 7 6 f . 
    . . f c e e e e e 7 7 7 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanSand0)
scene.cameraFollowSprite(mySprite)
mySprite.y += -30
