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
  }
});