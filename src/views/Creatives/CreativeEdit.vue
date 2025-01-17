<template>
  <div class="card">
    <h2 v-if="creative" class="text-left">
      Edit Creative: {{ creative.name }}
    </h2>
    <CreativeForm v-if="creative" :creative="creative"></CreativeForm>
    <p v-else>Loading campaign...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCreativeStore } from "@/stores/creatives";
import CreativeForm from "@/components/forms/CreativeForm.vue";

const route = useRoute();
const creativeStore = useCreativeStore();
const creative: any = ref(null);

onMounted(async () => {
  await creativeStore.getCreatives();

  const creativeId: any = route.params.id;
  creative.value = creativeStore.creatives.find(
    (c: any) => c.id === parseInt(creativeId)
  );
});
</script>
