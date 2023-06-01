# Spillmaker - Kodeutfordringen
```template
effects.confetti.startScreenEffect()
```

## Romskip: Steg 1
Vi har lyst på en fin, stjernefyldt bakgrunn for spillet vårt. På
høyre side av skjermen så er der en grønn ``||loops:on start||`` blokk
som har en ``||scene: start screen confetti effect||`` inne i seg. Dette 
er begynnelsen på hva som skal bli spillet vårt! 

Først, trykk på hvor det står **confetti** og forandre det til **star field**

```blocks
effects.starField.startScreenEffect()
```

## Romskip: Steg 2
Vi må lage romskipet som vi skal styre. Gå til ``||sprites: Sprites||`` menyen og finn
``||variables:set mySprite to||`` blokken. Legg denne til på bunnen av ``||loops:on start||``.

Du kan gi den et nytt navn, som f.eks. "romSkip" ved å klikke på "mySprite"

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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

## Romskip: Steg 3
Vårt nye romskip trenger et utseende! Klikk på den tomme firkanten på ``||variables:set mySprite to||``
og tegn hvordan du ønsker at romskipet ditt skal se ut.

NOTIS: La **of kind Player** stå som den er, siden romskipet er spilleren, altså "player" 

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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

## Romskip: Steg 4
Vi må kunne kontrollere skipet vårt. I ``||controller:Controller||`` menyen, finn
``||controller:move mySprite with buttons||`` blokken og legg den til på bunnen av 
``||loops:on start||``.

**Sjekk at "mySprite" delen av kontroll-blokken er det samme som navnet til skipet ditt**

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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
controller.moveSprite(romSkip)
```

## Romskip: Steg 5
Vi har lyst til at skipet skal holde seg innenfor skjermen slik at vi alltid kan se den.
Fra ``||sprites:Sprites||`` menyen, finn ``||sprites:set mySprite stay in screen||`` blokken
og legg den til i ``||loops:on start||``.

**Igjen, sjekk at navnet på denne blokken stemmer overens med hva skipet ditt heter :)**

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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
controller.moveSprite(romSkip)
romSkip.setStayInScreen(true)
```

## Romskip: Steg 6
Vi har lyst til at skipet vårt skal begynne spillet på bunnen av skjermen. I 
``||sprites:Sprites||`` menyen, finn ``||sprites:set mySprite x to||`` og legg den
inn sammen med resten av koden vår. 

Klikk på **x** og velg **bottom** i menyen som dukker opp. Forandre så tallet på 
slutten av blokken til **120**

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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
controller.moveSprite(romSkip)
romSkip.setStayInScreen(true)
romSkip.bottom = 120
```

## Romskip: Steg 7
Vi ønsker at romskipet vårt skal ha et vist antall liv. Gå til ``||info:Info||``
menyen og legg ``||info:set lives to||`` blokken inn sammen med resten av koden vår.
Hvor mange liv ønsker du at skipet vårt skal ha?

```blocks
effects.starField.startScreenEffect()
let romSkip: Sprite = null
romSkip = sprites.create(img`
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
controller.moveSprite(romSkip)
romSkip.setStayInScreen(true)
romSkip.bottom = 120
info.setLife(3)
```

## Asteroide: Steg 1
Vi har lyst til at spillet skal legge til asteroider som kommer mot skipet.
Først skal vi legge til hendelses-blokken som sier når en asteroide skal legges til.

I ``||game:Game||`` menyen, finn ``||game:on game update every 500 ms||`` blokken
og legg den inn et sted på skjermen hvor du har plass.

Dette er en *hendelse-blokk* som venter på at det som står på toppen skjer, så
kjører den koden som står på innsiden. Du kan plassere disse hvor du vil på skjermen.

```blocks
game.onUpdateInterval(500, function () {
})
```

## Asteroide: Steg 2
Fra ``||sprites:Sprites||`` menyen, finn en ny ``||variables:set mySprite to||``
blokk og legg den inn i vår nye ``||game:on game update every 500 ms||`` blokk.

Gi den et nytt navn og tegn hva du ønsker at astroiden dine skal se ut som.

```blocks
game.onUpdateInterval(500, function () {
    asteroide = sprites.create(img`
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

## Asteroide: Steg 3
Astroiden er ikke en spiller, men en fiende som vi skal prøve å unngå. På slutten av 
``||variables:set Asteroide to||`` blokken, bytt typen fra **Player** til **Enemy**


```blocks
game.onUpdateInterval(500, function () {
    asteroide = sprites.create(img`
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

## Asteroide: Steg 4


```blocks
game.onUpdateInterval(500, function () {
    asteroide = sprites.create(img`
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

## Asteroide: Steg 5
Sjekk at navnet som står i rødt på ``||functions: call function||`` blokken er det samme
som hva asteroiden din heter.

```blocks
game.onUpdateInterval(500, function () {
    asteroide = sprites.create(img`
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
	enemy.movement(asteroide)
})
```

## Kollisjonlogikk: Steg 1
Vi har lyst til at noe skal skje når en asteroide treffer skipet vårt. Dette er 
en hendelse, så vi trenger en ny hendelse-blokk.

I ``||sprites:Sprites||`` menyen, finn 
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||`` blokken
og legg den et sted på skjermen hvor du har plass.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
})
```

## Kollisjonlogikk: Steg 2
Klikk på ``||Sprites: of kind Player||`` **nr. 2** på denne blokken, og bytt den til **Enemy**,
siden spilleren er av typen Player og asteroidene er av typen Enemy.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Kollisjonlogikk: Steg 3
Vi har lyst til at asteroiden som treffer oss skal bli borte. i ``||sprites:Sprites||``
menyen, finn ``||sprites:destroy mySprite||`` blokken og legg den til i overlap 
hendelse-blokken vår.

Bytt **mySprite** delen til **otherSprite**. Du kan klikke på den røde sirkelen hvor det
står **otherSprite** på overlap-blokken, og dra denne inn i destroy-blokken.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
```

## Kollisjonlogikk: Steg 4
Vi har lyst til at skjermen skal riste når vi treffer en asteroide, for å lage litt drama.
Fra ``||scene:Scene||`` menyen, finn ``||scene:camera shake||`` blokken og legg den inn i 
hendelse-blokken vår.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)

})
```

## Kollisjonlogikk: Steg 5
Vi er nesten der! Vi trenger å miste et liv når vi treffer en asteroide. I 
``||info:Info||`` menyen, finn ``||info:change life by||`` og legg den til i hendelse-blokken.

Nå har vi et enkelt spill hvor du prøver å unngå asteroidene! :)

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
	info.changeScoreBy(1)

})
```

## Laser: Steg 1
Men, vi har jo kanskje lyst til å kunne skyte ned asteroidene med en laser når 
vi trykker på 'A' knappen i spillet. I ``||controller:Controller||`` menyen, finn 
``||controller:on A button pressed||`` hendelse-blokken og legg den et ledig sted på skjermen. 

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```

## Laser: Steg 2
Nå legger vi til laseren som et prosjektil som kommer fra skipet vårt. I 
``||sprites:Sprites||`` menyen, finn ``||variables:set projectile to projectile from mySprite||``
og legg denne inn i ``||controller:on A button pressed||`` blokken.

Igjen, du kan gi denne et nytt navn, eller bare la den hete "projectile"

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
        `, romSkip, 50, 50)
})
```

## Laser: Steg 3
Klikk på den tomme firkanten i ``||variables:set projectile to||`` blokken og 
tegn hva du ønsker at laseren skal se ut som.

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
        `, romSkip, 50, 50)
})
```

## Laser: Steg 4
Vi har lyst til at laseren skal komme fra skipet vårt. Sjekk at den midterste delen av 
``||variables: set projectile to||`` blokken er navnet på skipet vårt.

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
        `, romSkip, 50, 50)
})
```

## Laser: Steg 5
Vi ønsker at laseren skal bevege seg rett opp fra skipet. Bytt de to tallene på 
slutten av ``||variables:set projectile to||`` blokken til **vx = 0** og 
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
        `, romSkip, 0, -150)
})
```

## Laserlogikk: Steg 1
Til slutt så ønsker vi at laseren skal skyte ned asteroidene og gi oss poeng.

Vi trenger en ny hendelse-blokk som venter på at en laser treffer en asteroide. I
``||sprites:Sprites||`` menyen, finn en ny 
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||``.
Legg den på en ledig del av skjermen.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
})
```
## Laserlogikk. Steg 2
Laseren er av typen Projectile og asteroidene er av typen Enemy. 

Klikk på den nye overlap-blokken hvor det står **Player**, bytt den første til 
å si **Projectile** og den andre til å si **Enemy**

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
})
```

## Laserlogikk: Steg 3
Vi har lyst til at asteroidene skal forsvinne. I ``||sprites:Sprites||`` menyen,
finn en ny ``||sprites:destroy mySprite||`` og legg den til i den nye overlap-blokken vår.

Bytt **mySprite** delen til **otherSprite**. Du kan klikke på den røde sirkelen hvor det
står **otherSprite** på overlap-blokken, og dra denne inn i destroy-blokken.

(Du kan også legge til en liten animasjon ved å klikke på pluss knappen på denne blokken)

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
sprites.destroy(otherSprite)
})
```

## Laserlogikk: SISTE STEG!
Vi er nesten der! 

Vi har lyst til å få poeng når vi greier å treffe en asteroide med laseren vår. I 
``||info:Info||`` menyen, finn ``||info:change score by||`` blokken og legg den til i
``||Sprites:on sprite of kind player overlaps with other sprite of kind of player||``.

GRATULERER, DU HAR LAGET DITT EGET SPILL. Sørg for å teste det ut! :)

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
```
