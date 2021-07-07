<template>
  <div class="login">
    <n-form :label-width="80" :model="userValue" :size="size" :rules="rules" label-placement="left" ref="fromRef">
      <n-form-item label="姓名" path="username">
        <n-input v-model:value="userValue.username" placeholder="用户名" clearable />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input v-model:value="userValue.password" placeholder="密码" type="password" show-password-toggle max-length="12" clearable />
      </n-form-item>
      <div class="login-btn">
        <n-button color="white" dashed @click="userLogin">登陆</n-button>
      </div>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { NForm, NFormItem, NInput, NButton } from "naive-ui"
import { ref, unref } from "vue"

const userValue = ref({
  username: null,
  password: null
})
const size = ref<"medium">("medium")
const rules = ref({
  username: {
    require: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  password: {
    require: true,
    message: '请输入密码',
    trigger: 'blur'
  }
})
const userLogin = () => {
  // 发送请求
  // 成功的话，拿到 token
  // 失败的话，提示消息
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightseagreen;
  &-btn {
    display: flex;
    justify-content: center;
    padding-left: 80px;
  }
}
</style>
