/// <reference path="../../Phaser/Game.ts" />
(function () {
    var game = new Phaser.Game(this, 'game', 800, 600, init, create, update, render);

    var circle1, circle2, circle3;
    var fx;

    function init() {
        game.world.setSize(800, 600, true);
        game.load.image('blue', 'assets/tests/blue-circle.png');
        game.load.image('yellow', 'assets/tests/yellow-circle.png');
        game.load.image('magenta', 'assets/tests/magenta-circle.png');

        game.load.start();
    }
    function create() {
        circle1 = game.add.sprite(114, 34, 'blue');
        circle2 = game.add.sprite(426, 86, 'yellow');
        circle3 = game.add.sprite(221, 318, 'magenta');

        circle1.input.start(0, false, true);

        fx = game.camera.fx.add(Phaser.FX.Camera.Shake);
    }
    function update() {
        if (circle1.input.justReleased(0, 20)) {
            console.log('pressed');
            fx.start(0.05, 0.5, function() {
                console.log('fin');
            });
        }
    }
    function render() {
    }
})();
