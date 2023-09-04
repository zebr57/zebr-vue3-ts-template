<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { requestLogin } from './https/test'

onMounted(() => {
  return
  const params = {
    username: 'admin',
    pwd: 123456
  }
  requestLogin.connect(params).then((res: object) => {
    console.log(res)
  })
  setTimeout(() => {
    requestLogin.cancel()
  }, 2000)
})
</script>
<style lang="scss" scoped>
h2 {
  color: $base_color;
}
</style>
