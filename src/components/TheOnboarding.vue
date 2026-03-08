<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    document.querySelector('a-scene').emit('enter-scene');
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>VR Pizzeria</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – walk + Teleport (Grip for grab and laser for
              click) + Gaze cursor for click
            </li>
          </ul>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://sketchfab.com/3d-models/table-with-tablecloth-50bd4cc3a141400cb84ea66fd8dfb2a6" target="_blank">Table with tablecloth</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/yarelon111" target="_blank">Yarelon</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/lunch-plate-school-project-eef24ebe601c4e2f99da3108ddc3b09b#download" target="_blank">Lunch plate</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/FrenchBaguette" target="_blank">Ole Gunnar Isager</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/copper-candlestick-a733b4ab7cd64106b17ff685568f16d6" target="_blank">Copper candlestick</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/shuvalov.di" target="_blank">shuvalov.di</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/wooden-chair-1b78be3a0a0e46ebbd7c0c12ee676ec0" target="_blank">Wooden chair</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/StainlessReality" target="_blank">Stainless Reality Ltd</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/broom-dba39c4dbed747fab4adb5cd2819e97c" target="_blank">Broom</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/1-3D.com" target="_blank">1-3D.com</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/norwayjohn/sounds/404685/" target="_blank">Ocean cret</a>
          </dt>
          <dd>
            by <a href="https://freesound.org/people/norwayjohn/" target="_blank">norwayjohn</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0</a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/YeshniGounden/sounds/654223/" target="_blank">Turning a light switch on</a>
          </dt>
          <dd>
            by <a href="https://freesound.org/people/YeshniGounden/" target="_blank">YeshniGounden</a>
            under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>
          </dd>
          <p>Les tableaux ont été trouvés sur Sketchfab mais, ne sont plus disponibles.</p>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #1e1e1e;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    padding-bottom: 1rem;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fafafa;
    color: #1e1e1e;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
