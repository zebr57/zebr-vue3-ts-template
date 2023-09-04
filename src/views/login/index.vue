<template>
  <div class="login_page">
    <el-form
      :model="formData"
      ref="loginFormRef"
      :rules="rules"
      label-width="80px"
      :inline="false"
    >
      <el-form-item label="用户账号" prop="username">
        <el-input :prefix-icon="User" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input
          :prefix-icon="Lock"
          v-model="formData.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="handleReset(loginFormRef)"
          >重 置</el-button
        >
        <el-button type="primary" @click="handleLogin(loginFormRef)"
          >登 录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { requestLogin } from './api'
import type { responseDataType } from '@/https/type'
import router from '@/router'

interface LoginForm {
  username: string
  password: string
}

const loginFormRef = ref<FormInstance>()
const formData = reactive<LoginForm>({ username: 'admin', password: 'abc123' })
const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
    // { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
  ]
})
let userStore = useUserStore()

/* ===================================== methods ===================================== */
// 登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      requestLogin.connect(formData).then((res: responseDataType) => {
        if (res.code == '200') {
          userStore.setUserInfo(res.data)
        }
        ElMessage({
          message: res.message,
          type: res.code == '200' ? 'success' : 'error'
        })
        router.push('/userlist')
      })
    } else {
      console.log('err submit:', fields)
      ElMessage({
        message: '请输入账号密码',
        type: 'warning'
      })
    }
  })
}
// 重置
const handleReset = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.login_page {
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  background-color: bisque;
  height: 100vh;
}
</style>

<!-- 
  el-form 绑定ref和rules
  <el-form ref='xxx'> ref不需要v-bind 
  绑定ref和rules需要从vue引入ref声明和引入FormInstance, FormRules 类型
  docs:https://element-plus.org/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C
 -->
