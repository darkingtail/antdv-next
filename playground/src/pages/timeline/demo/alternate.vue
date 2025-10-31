<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
    color: 'green',
  },
  {
    dot: h(ClockCircleOutlined, { style: { fontSize: '16px' } }),
    children: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    color: 'red',
    children: 'Network problems being solved 2015-09-01',
  },
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Technical testing 2015-09-01',
    dot: h(ClockCircleOutlined, { style: { fontSize: '16px' } }),
  },
]
</script>

<template>
  <a-timeline mode="alternate" :items="items" />
</template>
