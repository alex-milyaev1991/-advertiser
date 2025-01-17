<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Card from "primevue/card";

import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

const router = useRouter();

const email = ref("");
const password = ref("");

const onSubmit = async () => {
  try {
    const response = await appStore.login(email.value, password.value);
    console.log("Login success:", response);
    router.push("/");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<template>
  <div
    class="login-container flex align-items-center justify-content-center h-screen"
  >
    <Card>
      <template #title>
        <img
          src="../assets/tappads.jpg"
          width="200"
          class="logo vue"
          alt="Vue logo"
        />
      </template>
      <template #content>
        <div class="login-form">
          <form @submit.prevent="onSubmit">
            <div class="p-field mb-3">
              <InputText
                class="w-full"
                id="email"
                v-model="email"
                required
                placeholder="Enter your email*"
              />
            </div>
            <div class="p-field">
              <Password
                class="w-full"
                id="password"
                v-model="password"
                size="large"
                placeholder="Enter your password*"
                toggleMask
                required
                :feedback="false"
              />
            </div>
            <Button
              label="Login"
              type="submit"
              class="p-button-primary w-full mt-3"
            />
          </form>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.login-form {
  width: 320px;
  max-width: 100%;
}
>>> .p-password-input {
  width: 100%;
}
</style>
