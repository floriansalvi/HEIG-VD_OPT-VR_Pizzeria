<script setup>
import { defineProps } from 'vue';
import BaseTable from './BaseTable.vue';

const props = defineProps({
  instances: {
    type: Array, // [{x, y, z, rotationY}]
    required: true
  }
});
</script>

<template>
  <a-entity>
    <BaseTable
      v-for="(inst, i) in instances"
      :key="i"
      :position="`${inst.x} ${inst.y} ${inst.z}`"
      :rotation="inst.rotationY ? `0 ${inst.rotationY} 0` : '0 0 0'"
    />
  </a-entity>
</template>