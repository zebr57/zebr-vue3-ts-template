<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + iconName"></use>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  iconName: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
})
</script>

<style lang="scss" scoped></style>
