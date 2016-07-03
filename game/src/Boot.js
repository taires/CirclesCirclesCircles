Circles = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check Rox.orientated in internal loops to know if it should pause or not */
    orientated: false

};

Circles.Boot = function (game) {
};

Circles.Boot.prototype = {

    preload: function () {


    },

    create: function () {

        // this.stage.smoothed = false;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.input.maxPointers = 1;

        // this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            // this.scale.minWidth = 320;
            // this.scale.minHeight = 200;
            // this.scale.maxWidth = 800;
            // this.scale.maxHeight = 600;
            // this.scale.pageAlignHorizontally = true;
            // this.scale.pageAlignVertically = true;
            // this.scale.setScreenSize(true);
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.hasResized.add(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
        }

        this.state.start('Game');

    },

    gameResized: function (width, height) {
    },

    enterIncorrectOrientation: function () {

        Circles.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        Circles.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }

};
