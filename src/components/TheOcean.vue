<script setup>
import { ref } from 'vue';
import '../aframe/duplicate.js';

const color = ref('black');

</script>

<template>
    <a-entity position="0 -.3 0">
        <a-ocean
            color="aqua"
            width="100"
            depth="100"
            density="50"
            amplitude="0"
            amplitude-variance="0.1"
            speed="1"
            opacity=".75"
        ></a-ocean>
        <a-box
            height=".6"
            width="1"
            depth="1"
            position="-7 0 -7"
            color="green"
            duplicate="rows: 15; cols: 15; gap: 0"
        ></a-box>
        <a-hexagon
            radius="0.5"
            height="0.1"
            color="black"
            position="0 1 0"
            create-tiles
        ></a-hexagon>
        <a-entity light="type: ambient; intensity: 3; color: #fff"></a-entity>
        <a-entity light="type: point; intensity: 7" position="0 10 -15"></a-entity> 
    </a-entity>
</template>