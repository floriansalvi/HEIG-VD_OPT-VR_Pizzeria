<script setup>

</script>

<template>
    <a-entity position="0 0 0">
        <a-entity
            id="table"
            gltf-model="#table"
            position="0 0 0"
            shadow="cast: true; receive: true">
        ></a-entity>

        <a-entity class="place">
            <a-entity
                gltf-model="#plate"
                position="0 .763 -.225"
                scale="1 1 1">
            </a-entity>
            <a-box
                depth="0.3"
                height="0.002"
                width="0.4"
                position="0 .765 -.225"
                color="beige">
            </a-box>
            <a-entity
                gltf-model="#chair"
                position="0 0 -0.7"
                shadow="cast: true; receive: true"
            >
            </a-entity>
        </a-entity>
        <a-entity class="place" rotation="0 180 0">
            <a-entity
                gltf-model="#plate"
                position="0 .763 -.225"
                scale="1 1 1">
            </a-entity>
            <a-box
                depth="0.3"
                height="0.002"
                width="0.4"
                position="0 .765 -.225"
                color="beige">
            </a-box>
            <a-entity
                gltf-model="#chair"
                position="0 0 -0.7"
                shadow="cast: true; receive: true"
            >
            </a-entity>
        </a-entity>
        <a-entity
            id="candle"
            gltf-model="#candle"
            position="0 .765 0"
            scale=".8 .8 .8"
            rotation="0 -30 0"
        ></a-entity>
        <a-entity
            light="
                type: point;
                color: #ffb36b;
                castShadow: true;
                intensity: 0.4;
                distance: 1.5;
                decay: 1.5"
            position="0 0.9 0"
            animation__flicker="
                property: light.intensity;
                dir: alternate;
                dur: 120;
                loop: true;
                to: 0.3;
                easing: easeInOutSine">
        </a-entity>
    </a-entity>
</template>