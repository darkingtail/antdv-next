<script setup lang="ts">
import { ref } from 'vue'

const reverse = ref(false)

const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
  },
  {
    children: 'Technical testing 2015-09-01',
  },
]

function handleClick() {
  reverse.value = !reverse.value
}
</script>

<template>
  <div>
    <a-timeline pending="Recording..." :reverse="reverse" :items="items" />
    <a-button type="primary" class="mt-4" @click="handleClick">
      Toggle Reverse
    </a-button>
  </div>
</template>
