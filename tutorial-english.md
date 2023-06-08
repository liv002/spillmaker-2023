# Game Maker - Coding Challenge
```template
effects.confetti.startScreenEffect()
```
## Space ship: Step 1
We want a nice, star-filled background for our game. On the right side of 
the screen there should be a green ``||loops:on start||`` block containing a 
``||scene: start screen confetti effect||``. This is the start of our game,
which we will now expand to a complete game!

Firstly, change the effect from **confetti** to **star field**

```blocks
effects.starField.startScreenEffect()
```

## Space ship: Step 2

We need to make a space ship that we will be playing as. Go to the ``||sprites: Sprites||``
menu and find the ``||variables:set mySprite to||`` block, and add it do the bottom of
``||loops:on start||``. You can give it a new name, like "spaceShip" by clicking
on "mySprite". 

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
```

## Space ship: Step 3
Our new space ship needs a design! Click the blank square on ``||variables:set mySprite to||``
and draw how you want the ship to look. 

NOTE: Leave the **of kind Player** as is, as the space ship is who we want to play as.

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . 4 2 2 2 2 . . 2 2 2 2 4 . . 
    . 4 4 2 2 2 6 9 1 9 2 2 2 4 4 . 
    4 4 4 2 2 2 6 9 9 1 2 2 2 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
    4 . . b b b . . . . b b b . . 4 
    4 . b b b b b . . b b b b b . 4 
    . . c c c c c . . c c c c c . . 
    `, SpriteKind.Player)
```

## Space ship: Step 4
We want to be able to control our space ship. In the ``||controller:Controller||``
menu, find the ``||controller:move mySprite with buttons||`` block and add it to
``||loops:on start||``. 

**Make sure that the "mySprite" portion matches what you have called your ship.** 

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . 4 2 2 2 2 . . 2 2 2 2 4 . . 
    . 4 4 2 2 2 6 9 1 9 2 2 2 4 4 . 
    4 4 4 2 2 2 6 9 9 1 2 2 2 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
    4 . . b b b . . . . b b b . . 4 
    4 . b b b b b . . b b b b b . 4 
    . . c c c c c . . c c c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip)
```

## Space ship: Step 5
We want our space ship to stay inside the screen where we can see it. From the
``||sprites:Sprites||`` menu, find the ``||sprites:set mySprite stay in screen||``
block and add it to ``||loops:on start||``

**Once again, make sure the name in the little box matches what your space ship is called :)**

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . 4 2 2 2 2 . . 2 2 2 2 4 . . 
    . 4 4 2 2 2 6 9 1 9 2 2 2 4 4 . 
    4 4 4 2 2 2 6 9 9 1 2 2 2 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
    4 . . b b b . . . . b b b . . 4 
    4 . b b b b b . . b b b b b . 4 
    . . c c c c c . . c c c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip)
spaceShip.setStayInScreen(true)
```

## Space ship: Step 6
We want our spaceship to start the game at the bottom of our screen. In the
``||sprites:Sprites||`` menu, find the ``||sprites:set mySprite x to||`` and 
add it to the rest of our code. 

Click on the **x** and change it to **bottom**, then change the number to **120**

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . 4 2 2 2 2 . . 2 2 2 2 4 . . 
    . 4 4 2 2 2 6 9 1 9 2 2 2 4 4 . 
    4 4 4 2 2 2 6 9 9 1 2 2 2 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
    4 . . b b b . . . . b b b . . 4 
    4 . b b b b b . . b b b b b . 4 
    . . c c c c c . . c c c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip)
spaceShip.setStayInScreen(true)
spaceShip.bottom = 120
```

## Space ship: Step 7 
We want our space ship to have lives. Go to the ``||info:Info||`` menu and add
the ``||info:set lives to||`` block to our code. How many lives do you want your
space ship to have?

```blocks
effects.starField.startScreenEffect()
let spaceShip: Sprite = null
spaceShip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . b . . . . . . b . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . . 2 2 2 . . . . 2 2 2 . . . 
    . . 4 2 2 2 2 . . 2 2 2 2 4 . . 
    . 4 4 2 2 2 6 9 1 9 2 2 2 4 4 . 
    4 4 4 2 2 2 6 9 9 1 2 2 2 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
    4 . . b b b . . . . b b b . . 4 
    4 . b b b b b . . b b b b b . 4 
    . . c c c c c . . c c c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceShip)
spaceShip.setStayInScreen(true)
spaceShip.bottom = 120
info.setLife(3)
```

## Asteroid: Step 1
We want the game to create asteroids that our ship can avoid or shoot down. 
First we are going to add the event block that will spawn our asteroids. In the 
``||game:Game||`` menu, find the ``||game:on game update every 500 ms||`` and it 
to a free space on your screen. 

This is an *event block* that waits for the event described at the top to happen, 
and then runs whatever blocks we have put inside it. 
This block you can put wherever you want on your screen.

```blocks
game.onUpdateInterval(500, function () {
})
```

## Asteroid: Step 2
From the ``||sprites:Sprites||`` menu, find a new ``||variables:set mySprite to||``
block and add it to the new ``||game:on game update every 500 ms||`` block.

Give it a new name and draw what you want your asteroid to look like.

```blocks
game.onUpdateInterval(500, function () {
    asteroid = sprites.create(img`
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c b c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c b c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c b c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c b c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        . c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
})
```

## Asteroid: Step 3
The asteroid is not a player, but an enemy we don't want to hit. At the end of the 
``||variables:set asteroid to||`` block, change the type from **player** to 
**enemy**

```blocks
game.onUpdateInterval(500, function () {
    asteroid = sprites.create(img`
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c b c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c b c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c b c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c b c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        . c c c c c c c c c c c c c c . 
        `, SpriteKind.Enemy)
})
```


## Asteroid: Step 4
Lastly, we want the asteroids to move towards us and start at a random place along the top end 
of the screen. We have created a block that does all of this for us. 

In the ``||enemy:Enemy||`` menu, find the ``||enemy:movement||`` block, and add it to our
``||game:on game update||`` block.

```blocks
game.onUpdateInterval(500, function () {
    asteroid = sprites.create(img`
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c b c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c b c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c b c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c b c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        . c c c c c c c c c c c c c c . 
        `, SpriteKind.Enemy)
	enemy.movement()
})
```

## Asteroid: Step 5
We want the asteroids to move. In the ``||variables:Variables||`` menu, find the little circular
block with the same name as what you have called your asteroids. Drag this into the circular space
on the movement block.

```blocks
game.onUpdateInterval(500, function () {
    asteroid = sprites.create(img`
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c b c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c b c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c b c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c b c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        . c c c c c c c c c c c c c c . 
        `, SpriteKind.Enemy)
	enemy.movement(asteroid)
})
```

## Collision logic: Step 1
We want something to happen when an asteroid hits our ship. This is an event, so we need
a new event block. In the ``||sprites:Sprites||`` menu, find the 
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||``.
Add it to somewhere with free space on your screen.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
})
```

## Collision logic: Step 2
Click on the **2nd** ``||Sprites: of kind Player||`` on the 
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||`` block,
and change it to **Enemy**, as our asteroid is of kind enemy.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Collision logic: Step 3
We want the asteroid that hits us to be destroyed, In the ``||sprites:Sprites||`` 
menu, find the ``||sprites:destroy mySprite||`` and add it to the overlap event block.

Change **mySprite** to **otherSprite**. You can drag a circular **otherSprite**
block from the overlap block.


```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
```

## Collision logic: Step 4
To add some drama we want the screen to shake when hitting an asteroid. From the
``||scene:Scene||`` menu, find the ``||scene:camera shake||`` block and add it 
to our event block.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)

})
```

## Collision logic: Step 5
We're almost there! We just need to lose a life when hitting an asteroid. In the 
``||info:Info||`` menu, find the ``||info:change life by||``.

We now have a basic game where you dodge asteroids! :)

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
	info.changeLifeBy(-1)

})
```

## Laser: Step 1
We are done with the space ship itself. However, we want it to shoot a laser
when we press the 'A' button in game. In ``||controller:Controller||`` find the 
``||controller:on A button pressed||``. 

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

## Laser: Step 2
Now we add the laser as a projectile that from our space ship. In the 
``||sprites:Sprites||`` menu, find ``||variables:set projectile to projectile from mySprite||``
and add this to the ``||controller:on A button pressed||`` block.

Once again you may give it a new name, or simply stick to "projectile"

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceShip, 50, 50)
})
```

## Laser: Step 3
Click the empty square in the ``||variables:set projectile to||`` and draw what
you want your laser to look like.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `, spaceShip, 50, 50)
})
```

## Laser: Step 4
We want the laser to come from our ship, make sure the middle part of the ``||variables: set projectile to||``
is the name of our space ship.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `, spaceShip, 50, 50)
})
```

## Laser: Step 5
We want the laser to move straight up from our ship. Change the two numbers at 
the end of the ``||variables:set projectile to||`` block to **vx = 0** and 
**vy = -150**

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `, spaceShip, 0, -150)
})
```

## Laser logic: Step 1
We want our laser to shot down the asteroids and give us points.

We need a new event block that waits for our laser to hit an asteroid. In the 
``||sprites:Sprites||`` menu, find the 
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||``.
Add it to somewhere with free space on your screen.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
})
```

## Laser logic: Step 2
The laser is of kind projectile and the asteroids are of kind enemy. 

Click on where the block says **player**, change one of them to **projectile**
and the other to **enemy**

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Laser logic: Step 3
We want the asteroid that gets hit to disappear. In the ``||sprites:Sprites||`` 
menu, find the ``||sprites:destroy mySprite||`` and add it to the overlap event block.

Change **mySprite** to **otherSprite**. You can drag a circular **otherSprite**
block from the overlap block.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
sprites.destroy(otherSprite)
})
```

## Laser logic: FINAL STEP!
We want to give ourselves some points when hitting an asteroid. In the 
``||info:Info||`` menu, find the ``||info:change score by||`` block and 
add it to the ``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||``



```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
```
