<template>
  <div id="app">
    <router-view/>
    <img :src="'http://127.0.0.1:3000/admin/captcha'" alt="">
    <input type="text" v-model="cap">
    <button @click="getCap">提交</button>
    <div>{{backMsg}}</div>
  </div>
</template>

<script>
import {postApi} from '@/axios/post' 

export default {
  name: 'App',
  data() {
    return {
      cap: '',
      backMsg: ''
    }
  },
  created() {
    
  },
  methods: {
    getCap() {
      postApi({capkey: this.cap, username: 'jason', password: '123456'}).then(res => {
        console.log(res)
        this.backMsg = res.data.message;
      })
    }
  }
}
</script>

<style>
#app {
}
</style>
