<template>
  <div class="card">
    <h2 v-if="campaign" class="text-left">
      Edit Campaign: {{ campaign.name }}
    </h2>
    <CampaignsForm v-if="campaign" :campaign="campaign"></CampaignsForm>
    <p v-else>Loading campaign...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCampStore } from "@/stores/campaigns";
import CampaignsForm from "@/components/forms/CampaignsForm.vue";

const route = useRoute();
const campStore = useCampStore();
const campaign: any = ref(null);

onMounted(async () => {
  await campStore.getCampaigns();

  const campaignId: any = route.params.id;
  campaign.value = campStore.campaigns.find(
    (c: any) => c.id === parseInt(campaignId)
  );
});
</script>
