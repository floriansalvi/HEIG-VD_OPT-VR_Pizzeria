import randomShade from "../utils/randomShade";
import randomSize from "../utils/randomSize";

AFRAME.registerComponent('duplicate', {
  schema: {
    cols: { type: 'number', default: 10 },
    rows: { type: 'number', default: 10 },
    gap: { type: 'number', default: 0.02 },
    heighVariation: { type: 'number', default: 0.02 }
  },

  init: function () {
    const target = this.el;

    const box = new THREE.Box3().setFromObject(target.object3D);
    const size = new THREE.Vector3();
    box.getSize(size);

    const mesh = target.getObject3D('mesh');
    const color = mesh.material.color;

    const baseX = target.object3D.position.x;
    const baseY = target.object3D.position.y;
    const baseZ = target.object3D.position.z;

    for (let i = 0; i < this.data.rows; i++) {
      for (let j = 0; j < this.data.cols; j++) {
        if(i === 0 && j === 0) continue;

        const clone = target.cloneNode(true);
        clone.removeAttribute('duplicate');

        clone.setAttribute('position', {
            x: baseX + j * (size.x + this.data.gap),
            y: baseY + randomSize(this.data.heighVariation),
            z: baseZ + i * (size.z + this.data.gap)
        });

        clone.setAttribute('material', 'color', randomShade(color));

        target.parentNode.appendChild(clone);
      }
    }
  },

  remove: function () {
    
  },
});