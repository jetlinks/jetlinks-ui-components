<docs>
---
order: 11
title: 登录框
---

## zh-CN

普通的登录框，可以容纳更多的元素。

</docs>
<template>
  <j-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <j-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <j-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </j-input>
    </j-form-item>

    <j-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <j-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </j-input-password>
    </j-form-item>

    <j-form-item>
      <j-form-item name="remember" no-style>
        <j-checkbox v-model:checked="formState.remember">Remember me</j-checkbox>
      </j-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
    </j-form-item>

    <j-form-item>
      <j-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Log in
      </j-button>
      Or
      <a href="">register now!</a>
    </j-form-item>
  </j-form>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});
</script>
<style>
#components-Form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-Form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-Form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
