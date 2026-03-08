AFRAME.registerComponent('my-kitchen-counter', {
  init: function () {

    const points = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(1.8, 0),
      new THREE.Vector2(1.8, 0.6),
      new THREE.Vector2(0.6, 0.6),
      new THREE.Vector2(0.6, 1.6),
      new THREE.Vector2(2.6, 1.6),
      new THREE.Vector2(2.6, 2.2),
      new THREE.Vector2(0, 2.2),
    ];

    const shape = new THREE.Shape(points);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: false
    });

    geometry.rotateX(-Math.PI / 2);
    geometry.computeBoundingBox();
    geometry.center();
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: '#d1d1d1',
      metalness: 1,
      roughness: 0.45,
      envMapIntensity: 1.2
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    this.el.setObject3D('mesh', mesh);


    /* =========================
       LOGIQUE GAMEPLAY
       ========================= */

    this.el.addEventListener('click', () => {

      // éviter plusieurs pizzas
      if (document.querySelector('#pizza')) return;

      const pizza = document.createElement('a-entity');

      pizza.setAttribute('id', 'pizza');
      pizza.setAttribute('pizza', '');

      // visuel temporaire
      pizza.setAttribute('geometry', 'primitive: cylinder; radius:0.22; height:0.02');
      pizza.setAttribute('material', 'color:#f5d6a1');

      pizza.setAttribute('position', '0 0.06 0');

      this.el.appendChild(pizza);

    });

  }
});