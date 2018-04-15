import {
  Group,
  ConeGeometry,
  MeshBasicMaterial,
  Mesh,
  Color,
} from 'three';
import store from '../../store';

class Player extends Group {
  constructor() {
    super();

    // Geometry
    this._geometry = new ConeGeometry(1, 2, 3);

    // Material
    this._material = new MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
    });

    // Mesh
    this._mesh = new Mesh(
      this._geometry,
      this._material,
    );
    this.add(this._mesh);
  }

  update() {
    const { position, status } = store.getState().player;
    this.rotation.y += 0.1;
    this.position.set(position.x, position.y, 0);

    switch (status) {
      case 'destroyed':
        this.visible = false;
        this._material.opacity = 0;
        break;
      case 'damage':
        this.visible = true;
        this._material.opacity = 1;
        this._material.color = new Color(0xff0000);
        break;
      case 'invincible':
        this.visible = true;
        this._material.opacity = 0.3;
        this._material.color = new Color(0xffffff);
        break;
      default:
        this.visible = true;
        this._material.opacity = 1;
        this._material.color = new Color(0xffffff);
        break;
    }
    this._material.needsUpdate = true;
  }
}

export default Player;
