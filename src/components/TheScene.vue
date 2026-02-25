<script setup>
  import { ref } from 'vue';
  import '../aframe/clickable.js';
  import TheOcean from './TheOcean.vue';

  import TheCameraRig from './TheCameraRig.vue';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: #82C8E5;"
    fog="type: linear;color: #82C8E5; near: 30; far: 60;"
    stats
  >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <template v-if="allAssetsLoaded">
      <TheOcean/>
    </template>

    <TheCameraRig />

  </a-scene>
</template>