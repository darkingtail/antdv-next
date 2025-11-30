<script setup lang="ts">
import { ArrowDownOutlined, ArrowUpOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-input-number>
    <template #upIcon>
      <ArrowUpOutlined />
    </template>
    <template #downIcon>
      <ArrowDownOutlined />
    </template>
  </a-input-number>
</template>
