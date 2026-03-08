<script setup>
import { ref, onMounted } from 'vue';
import '../aframe/duplicate.js';
import DuplicatePlace from './DuplicatePlace.vue';
import TheKitchen from './TheKitchen.vue';
import '../aframe/clickable.js'
import '../aframe/order-screen.js';


const isLightOn = ref(true);
let light = null;
let lightSwitch = null;

onMounted(() => {
  light = document.querySelector('#light-kitchen');
  lightSwitch = document.querySelector('#light-switch-toggle');
});

function handleLightToggle() {
  if (!light) return;

  isLightOn.value = !isLightOn.value;
  light.setAttribute(
    'light',
    'intensity',
    isLightOn.value ? 2 : 0
  );
  lightSwitch.setAttribute(
    'depth',
    isLightOn.value ? 0.02 : 0.025
  );

  lightSwitch.components.sound.playSound()
}

</script>

<template>
    <a-entity position="0 0 0">
        <a-plane
            id="floor"
            width="5"
            height="5.7"
            rotation="-90 0 0"
            position="0 0 0"
            material="src: #texture-floor-wood; repeat: 4 4"
            shadow="cast: true; receive: true"
        ></a-plane>
        <a-plane
            id="ceiling"
            width="5"
            height="5.7"
            rotation="90 0 0"
            position="0 2.4 0"
            material="src: #texture-wall-plaster; repeat: 1 1"
            shadow="cast: true; receive: true"
        ></a-plane>
        <a-entity
                gltf-model="#chandelier"
                position="0 2.4 0"
                scale="1 1 1"
                rotation="0 45 0"
        ></a-entity>
        <a-entity
            light="type: point;
                    color: #ffb36b;
                    castShadow: true;
                    intensity: 2;
                    distance: 10;
                    decay: 1"
            position="0 2.2 0">
        </a-entity>
        <a-plane
            id="wall-north"
            height="2.4"
            width="5"
            position="0 1.2 -2.85"
            rotation="0 0 0"
            material="src: #texture-wall-plaster; repeat: 1 1"
            shadow="cast: true; receive: true"
        >
        </a-plane>
        
        <a-entity
            id="wall-south"
            position="0 0 2.85"
            rotation="0 180 0"
        >
            <a-plane
                height="1"
                width="5"
                position="0 .5 0"
                material="src: #texture-wall-plaster; repeat: 1 1"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                height=".3"
                width="5"
                position="0 2.25 0"
                material="src: #texture-wall-plaster; repeat: 1 1"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                height="1.1"
                width="1"
                position="0 1.55 0"
                material="src: #texture-wall-plaster; repeat: 1 1"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                height="1.1"
                width="1"
                position="2 1.55 0"
                material="src: #texture-wall-plaster; repeat: 1 1"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                height="1.1"
                width="1"
                position="-2 1.55 0"
                material="src: #texture-wall-plaster; repeat: 1 1"
                shadow="cast: true; receive: true"
            ></a-plane>
            <a-plane
                width="3"
                height="1.1"
                position="0 1.55 -0.001"
                material="
                    color: #a7c7e7;
                    opacity: 0.45;
                    transparent: true;
                    roughness: 0;
                    metalness: 0.1;">
            </a-plane>
        </a-entity>

        <a-plane
            id="wall-separator"
            height="2.4"
            width="2.2"
            position=".1 1.2 -1.75"
            rotation="0 -90 0"
            material="src: #texture-wall-plaster; repeat: 1 1"
            shadow="cast: true; receive: true"
        >
        </a-plane>

        <a-entity
            id="order-screen"
            order-screen
            position="0 1.5 -2"
            visible="false">
            
            <a-plane
                width="1.2"
                height="0.8"
                color="#111">
            </a-plane>

            <a-text
                id="order-text"
                value="Waiting for order..."
                align="left"
                position="-0.55 0.3 0.01"
                width="1.1"
                color="#ffffff">
            </a-text>

        </a-entity>


        <a-plane
            id="wall-east"
            color="beige"
            height="2.4"
            width="5.7"
            position="2.5 1.2 0"
            rotation="0 -90 0"
            material="src: #texture-wall-bricks; repeat: 4 2"
            shadow="cast: true; receive: true"
        >
        </a-plane>
        <a-entity>
            <a-entity
                gltf-model="#painting1"
                position="-2.5 1.6 1.5"
                scale="1 1 1"
                rotation="90 90 0"
            >
            </a-entity>
            <a-entity
                gltf-model="#painting2"
                position="-2.5 1.6 -.25"
                scale="1 1 1"
                rotation="90 90 0"
            >
            </a-entity>
        </a-entity>

        <a-plane
            id="wall-west"
            height="2.4"
            width="5.7"
            position="-2.5 1.2 0"
            rotation="0 90 0"
            material="src: #texture-wall-bricks; repeat: 4 2"
            shadow="cast: true; receive: true"
        >
        </a-plane>

        <DuplicatePlace
            :instances="[
                { x: -1.95, y: 0, z: 0.75 },
                { x: 0, y: 0, z: 0.75, rotationY: 90 },
                { x: 1.95, y: 0, z: 0.75 },
                { x: 1.4, y: 0, z: 2.3, rotationY: 90 },
                { x: -1.4, y: 0, z: 2.3, rotationY: 90 }
            ]"
        />
        <the-kitchen
            position="-1.2 0 -1.75"
        />

        <a-entity
                gltf-model="#chandelier"
                position="-1.2 2.4 -1.75"
                scale="1 1 1"
                rotation="0 45 0"
        ></a-entity>
        <a-entity
            id="light-kitchen"
            light="
                type: spot;
                color: #ffffff;
                intensity: 2;
                distance: 8;
                angle: 45;
                penumbra: 0.3;
                decay: 1;
                castShadow: true"
            position="-1.2 2.3 -1.75"
            rotation="-90 0 0">
        </a-entity>

        <a-entity
            id="light-switch"
            position=".1 1.2 -.95"
            rotation="0 -90 90"
        >
            <a-box
                width="0.08"
                height="0.08"
                depth="0.01"
                color="#f0f0f0"
            >
            </a-box>
            <a-box
                id="light-switch-toggle"
                width="0.05"
                height="0.05"
                depth="0.025"
                color="#fffee7"
                clickable
                @click="handleLightToggle()"
                sound="
                    src: #switch-sound;
                    autoplay: false;
                    loop: false;
                    positional: true;
                    volume: 2;
                    maxDistance: 3;
                    refDistance: 0.5;
                    poolSize: 5;
                "
            >
            </a-box>
        </a-entity>
    </a-entity>
</template>