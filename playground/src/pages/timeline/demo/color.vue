<script lang="ts" setup>
import { SmileOutlined } from '@antdv-next/icons'

const items = [
  {
    color: 'green',
    children: 'Create a services site 2015-09-01',
  },
  {
    color: 'green',
    children: 'Create a services site 2015-09-01',
  },
  {
    color: 'red',
  },
  {
    children: '',
  },
  {
    color: 'gray',
  },
  {
    color: 'gray',
  },
  {
    color: '#00CCFF',
  },
]
</script>

<template>
  <a-timeline :items="items">
    <template #contentRender="{ index }">
      <template v-if="index === 2">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </template>
      <template v-if="index === 3">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </template>
      <template v-if="index === 4">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </template>
      <template v-if="index === 5">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </template>
      <template v-if="index === 6">
        <p>Custom color testing</p>
      </template>
    </template>
    <template #dotRender="{ index }">
      <template v-if="index === 6">
        <SmileOutlined />
      </template>
    </template>
  </a-timeline>
</template>

<style>
p {
  margin: 0;
}
</style>
