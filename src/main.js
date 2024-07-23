import Phaser from "./lib/phaser";
import { PreloadScene } from "./scenes/preload-scene";

const game = new Phaser.Game({
  parent: 'game-container',
});

game.scene.add(PreloadScene.name, PreloadScene)

