<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import DafaultLayout from "@/layouts/DafaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout === "empty" ? EmptyLayout : DafaultLayout;
});
</script>

<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style scoped></style>
