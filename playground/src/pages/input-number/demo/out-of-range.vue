<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | number | null>('99')

function reset() {
  value.value = 99
}
</script>

<template>
  <a-space>
    <a-input-number v-model:value="value" :min="1" :max="10" />
    <a-button type="primary" @click="reset">
      Reset
    </a-button>
  </a-space>
</template>
