
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace test {
    /**
     * TODO: describe your function here
     * @param asteroid some Sprite that will do this behavior
     */
    //% block
    export function logic(asteroid: Sprite): void {
        asteroid.setVelocity(0, 75)
        asteroid.setPosition(randint(3, 150), 0)
    }
}
