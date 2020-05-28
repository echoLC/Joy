<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import userApi from '@/service/user'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  async created () {
    this.getUser()
  },

  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USERINFO'
    }),

    async getUser () {
      try {
         const res = await userApi.getUser()
         if (res.code !== 0) {
           throw new Error(res.msg)
         }
         this.userInfo = res.data
         this.setUserInfo(this.userInfo)
      } catch (err) {
        this.$messsage.success(err.message)
      }
    }
  },
}
</script>
