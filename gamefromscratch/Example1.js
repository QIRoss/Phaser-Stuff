class Example1 extends Phaser.Scene {
    constructor(){
        super({key: "Example1"});
    }

    preload(){
        this.load.image('GFS', 'assets/GFS.jpg');
    }

    create(){
        this.image = this.add.image(400, 300, 'GFS');
    }
    
}