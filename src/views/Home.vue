<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang: any) => {
  locale.value = lang;
};
</script>

<template>
  <div>
    <div class="card flex flex-wrap justify-center gap-4">
      <h1>Home</h1>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('ru')">Русский</button>
      <h1>{{ $t("welcome") }}</h1>
      <p>{{ $t("hello") }}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
