<script setup lang="ts"></script>

<template>
  <div class="home">
    <router-link to="/home">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.home {
}
</style>
