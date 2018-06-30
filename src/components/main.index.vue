<template>
  <div class="hello">
    <h1>我是main的入口的首页</h1>
    <router-link to="/list">
      <button>跳转到app的公用页面</button>
    </router-link>
    <router-link to="/mainDetail">
      <button>跳转到main的私有页面</button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
