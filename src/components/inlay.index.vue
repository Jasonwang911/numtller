<template>
  <div>
      <h1>我是inlay入口的首页</h1>
      <router-link to="/list">
        <button>跳转到app的公用页面</button>
      </router-link>
      <router-link to="/inlayDetail">
        <button>跳转到app入口和inlay公用的详情页</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'inlayIndex'
}
</script>

<style scoped>
</style>
