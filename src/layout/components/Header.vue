<template>
  <div class="header_container">
    <div class="header_container_logo">
      <img
        src="~@/assets/vue.svg"
        alt=""
        srcset=""
        width="24px"
        height="24px"
      />
      后台管理
    </div>
    <div class="header_container_user_info"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  &_logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  &_user_info {
    width: 100px;
    background: orange;
  }
}
</style>
