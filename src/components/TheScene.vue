<script setup>
  import { ref } from 'vue';
  import '../aframe/clickable.js';
  import '../aframe/outline.js'
  import TheOcean from './TheOcean.vue';
  import BaseTable from './BaseTable.vue';
  import TheRestaurant from './TheRestaurant.vue';
  import TheCameraRig from './TheCameraRig.vue';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: #f6b37a"
    fog="type: linear; color: #f6b37a; near: 15; far: 55"
    stats
    shadow="type: pcfsoft"
    outline
    vr-mode-ui="enabled: true"
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="table" src="assets/table.glb"></a-asset-item>
      <a-asset-item id="plate" src="assets/plate.glb"></a-asset-item>
      <a-asset-item id="candle" src="assets/candle.glb"></a-asset-item>
      <a-asset-item id="chair" src="assets/chair.glb"></a-asset-item>
      <a-asset-item id="painting1" src="assets/painting1.glb"></a-asset-item>
      <a-asset-item id="painting2" src="assets/painting2.glb"></a-asset-item>
      <a-asset-item id="chandelier" src="assets/chandelier.glb"></a-asset-item>
      <a-asset-item id="broom" src="assets/broom.glb"></a-asset-item>


      <img id="texture-floor-wood" :src="`assets/floor-wood.jpg`">
      <img id="texture-wall-plaster" :src="`assets/wall-plaster.jpg`">
      <img id="texture-wall-bricks" :src="`assets/wall-bricks.jpg`">

      <audio id="ocean-sound" src="assets/sound-ocean.wav" preload="auto"></audio>
      <audio id="switch-sound" src="assets/sound-switch.wav" preload="auto"></audio>

    </a-assets>

    <a-entity
      light="type: directional;
            color: #ff934d;
            intensity: 0.9"
      position="-10 6 -8"
      rotation="-25 -35 0">
    </a-entity>
    <a-entity
      light="type: ambient;
            color: #ffb58a;
            intensity: 0.4">
    </a-entity>

    <template v-if="allAssetsLoaded">
      <TheOcean
        position="0 -1 27.85"
      />
      <TheRestaurant
        position="0 0 0"
      />
    </template>

    <TheCameraRig />
  </a-scene>
</template>