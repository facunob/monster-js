import { BACKGROUNDS_ASSET_KEYS, BATTLE_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys";
import Phaser from "../lib/phaser";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: PreloadScene.name
    })
  }

  preload() {
    this.load.image(
      BACKGROUNDS_ASSET_KEYS.FOREST.key, 
      BACKGROUNDS_ASSET_KEYS.FOREST.location
    );
    this.load.image(
      BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND.key, 
      BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND.location
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP.key, 
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP.location
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP.key, 
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP.location
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.MIDDLE.key, 
      HEALTH_BAR_ASSET_KEYS.MIDDLE.location
    );

    this.load.image(
      MONSTER_ASSET_KEYS.CARNODUSK.key, 
      MONSTER_ASSET_KEYS.CARNODUSK.location
    );
    this.load.image(
      MONSTER_ASSET_KEYS.IGUANIGNITE.key, 
      MONSTER_ASSET_KEYS.IGUANIGNITE.location
    );
  }

  create() {
    this.add.image(0, 0, BACKGROUNDS_ASSET_KEYS.FOREST.key).setOrigin(0);
  }

  update() {}
}