<template>
  <div :class="$style.Login">
    <el-form
      :class="$style.LoginForm" 
      label-position="right" 
      label-width="80px" 
      :model="loginInfo">
      <el-form-item label="用户名称">
        <el-input v-model="loginInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="loginInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginInfo.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginHandler">登陆</el-button>
        <el-button type="success" @click="registerHandler">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* service */
import user from '@/service/user'

/* utils */
import {
  mapMutations
} from 'vuex'

/* configs */
import {
  TOKEN_STORAGE_KEY
} from '@/configs/Global'

export default {
  name: 'Login',

  data() {
    return {
      loginInfo: {
        username: '',
        phone: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapMutations({
      setToken: 'SET_TOKEN'
    }),

    async loginHandler () {
      try {
        const res = await user.login(this.loginInfo)
        if (res.code !== 0) {
          throw new Error(res.msg)
        }

        // 存储token
        this.setToken(res.token)

        this.$message.success('登陆成功')
        this.$router.push('/')
      } catch (err) {
        console.error(err.message)
        this.$message.error(err.message)
      }
    },

    async registerHandler () {
      try {
        const res = await user.register(this.loginInfo)
        if (res.code !== 0) {
          throw new Error(res.msg)
        }
        this.$message.success('注册成功')
        this.$router.push('/')
      } catch (err) {
        console.error(err.message)
        this.$message.error(err.message)
      }
    }
  },
}
</script>

<style lang="scss" module>
.Login {
  display: flex;
  align-items: center;
  justify-content: center;

  &Form {
    background-color: #fff;
    width: 300px;
    height: 300px;
    margin-top: 120px;
  }
}
</style>