/**
 * Custom blocks
 */
//% weight=100 color=#c381bc icon="\uf753"
namespace enemy {
    /**
     * @param asteroid some Sprite that will do this behavior
     */
    //% block
    export function movement(asteroid: Sprite): void {
        asteroid.setVelocity(0, 75)
        asteroid.setPosition(randint(3, 150), 0)
        asteroid.setFlag(SpriteFlag.AutoDestroy, true)
    }
}
