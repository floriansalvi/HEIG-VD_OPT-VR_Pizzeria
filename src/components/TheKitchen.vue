<script setup>
import { ref } from 'vue';
import '../aframe/duplicate.js';
import '../aframe/kitchen-counter.js';

const color = ref('black');

</script>

<template>
    <a-entity position="0 0 0">
        <a-entity
            my-kitchen-counter
            position="0 0.875 0"
            shadow="cast: true; receive: true"
        >
        </a-entity>
        <a-entity>
            <a-plane
                width="2.05"
                height="0.85"
                rotation="0 0 0"
                position="0.275 0.425 -.55"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                width="1.25"
                height="0.85"
                rotation="0 180 0"
                position="-.125 .425 .55"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                width="1.1"
                height="0.85"
                rotation="0 90 0"
                position="-.75 0.425 0"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                width="0.55"
                height="0.85"
                rotation="0 90 0"
                position="0.5 0.425 .825"
                shadow="cast: true; receive: true"
            ></a-plane>
        </a-entity>
        <a-entity
            id="broom"
            gltf-model="#broom"
            position="0.65 0 .70"
            scale=".8 .8 .8"
            rotation="30 90 0"
            shadow="cast: true; receive: true">
        ></a-entity>
    </a-entity>
</template>