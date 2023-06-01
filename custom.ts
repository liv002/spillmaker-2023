
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#c381bc icon="f753"
namespace enemy {
    /**
     * TODO: describe your function here
     * @param asteroid some Sprite that will do this behavior, eg: asteroid
     */
    //% block
    export function movement(asteroid: Sprite): void {
        asteroid.setVelocity(0, 75)
        asteroid.setPosition(randint(3, 150), 0)
    }
}
