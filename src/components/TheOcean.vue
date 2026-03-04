<script setup>
import { ref, onMounted } from 'vue';
import '../aframe/duplicate.js';

onMounted(() => {
  const ocean = document.querySelector('#ocean');

  const startAudioOnce = () => {
    if (!ocean?.components?.sound) return;

    ocean.components.sound.playSound();
    window.removeEventListener('click', startAudioOnce);
  };

  window.addEventListener('click', startAudioOnce);
});
</script>

<template>
    <a-entity position="0 -.3 0">
        <a-ocean
            id="ocean"
            color="aqua"
            width="50"
            depth="50"
            density="25"
            amplitude="0"
            amplitude-variance="0.1"
            speed="1"
            opacity=".75"
            sound="
                src: #ocean-sound;
                autoplay: false;
                loop: true;
                positional: true;
                volume: 2;
                maxDistance: 30;
                refDistance: 2.5;
            "
        ></a-ocean>
        <!-- <a-entity light="type: ambient; intensity: 3; color: #fff"></a-entity> -->
        <!-- <a-entity light="type: point; intensity: 7" position="0 10 -15"></a-entity>  -->
    </a-entity>
</template>