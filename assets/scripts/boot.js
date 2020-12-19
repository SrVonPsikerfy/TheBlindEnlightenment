export default class Boot extends Phaser.Scene {
    constructor() { super({ key: 'boot' }) };

    preload() {
        // Carga de datos de juego
        this.load.spritesheet('player', './assets/sprites/player.png',
            { frameWidth: 32, frameHeight: 41 });
        this.load.image('background', './assets/sprites/background.jpg');
        this.load.image('vision', './assets/sprites/black_circle.png');
        this.load.image('blindfold', './assets/sprites/black_background.png');

        // Carga de datos de menus
        this.load.image('pauseMenu', './assets/sprites/ui/pause_menu.png');
        this.load.image('pauseMenuResume', './assets/sprites/ui/resume_button.png');
        this.load.image('pauseMenuToMainMenu', './assets/sprites/ui/menu_button.png');
        this.load.image('mainMenu', './assets/sprites/ui/main_menu.png')
        this.load.image('mainMenuPlay', './assets/sprites/ui/play_button.png');
        this.load.image('mainMenuOptions', './assets/sprites/ui/settings_button.png');
        
        // Carga de datos de interfaz
        this.load.image('invBack', './assets/sprites/ui/inventory_bar.png');
        this.load.image('sanityBar', './assets/sprites/ui/sanity.png');
        this.load.image('sanityBarBack', './assets/sprites/ui/sanity_back.png');
        this.load.image('keybindQ', './assets/sprites/ui/key_Q.png');
        this.load.image('keybindE', './assets/sprites/ui/key_E.png');
        this.load.image('keybindSpace', './assets/sprites/ui/key_Space.png');

        // Carga los datos del mapa.
        this.load.tilemapTiledJSON('map', './assets/sprites/tilesets/map_01.json');

        // Carga el tileset que contiene las texturas del mapa.
        this.load.image('tiles', './assets/sprites/tilesets/slates64Tileset.png');

        // Carga los items incluidos en la escena        
        this.load.atlas('items', 'assets/sprites/items.png?', 'assets/sprites/atlas/items.json');

        // Carga el codigo para usar webfonts
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        //inicializacion de la escena de juego
        this.scene.start('mainMenuScene');
    }
}