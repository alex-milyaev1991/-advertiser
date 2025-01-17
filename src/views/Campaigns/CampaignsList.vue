<template>
  <div class="inner-page">
    <div class="flex flex-wrap justify-content-end gap-2 px-5 mb-3">
      <Button
        as="router-link"
        to="/campaigns/create"
        label="Create campaign"
        class="flex items-center"
        size="small"
      />
    </div>
    <div class="card">
      <DataTable
        :value="campaigns"
        tableStyle="min-width: 50rem"
        :paginator="true"
        :rows="pagination.limit"
        :totalRecords="pagination.totalRecords"
        :first="(pagination.currentPage - 1) * pagination.limit"
        @page="onPageChange"
      >
        <Column field="name" header="Name"></Column>

        <Column header="Activity">
          <template #body="{ data }">
            <ToggleButton
              v-model="data.is_active"
              onLabel="On"
              offLabel="Off"
              @change="toggleCampaignActivity(data.id, data.is_active)"
            />
          </template>
        </Column>

        <Column field="moderation_status" header="Moderation Status"></Column>
        <Column field="condition_status" header="Work Status"></Column>

        <Column header="Bid">
          <template #body="{ data }">
            <div v-if="data.isEditing">
              <input
                type="number"
                v-model="data.bid"
                class="p-inputtext p-component"
                style="width: 80px"
              />
              <Button
                label="Save"
                size="small"
                @click="() => saveBid(data)"
                class="ml-2"
              />
            </div>
            <div
              v-else
              @click="data.isEditing = true"
              style="cursor: pointer; color: blue"
            >
              {{ data.bid }}
            </div>
          </template>
        </Column>

        <Column header="Edit">
          <template #body="{ data }">
            <Button
              as="router-link"
              :to="`/campaigns/${data.id}`"
              label="Edit"
              size="small"
            />
          </template>
        </Column>
        <Column header="Creatives">
          <template #body="{ data }">
            <Button
              as="router-link"
              :to="`/campaigns/${data.id}/creatives`"
              label="Creatives"
              size="small"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useCampStore } from "@/stores/campaigns";
import ToggleButton from "primevue/togglebutton";

const campStore = useCampStore();
const campaigns = ref([]);
const pagination = ref({
  limit: 10,
  totalRecords: 0,
  currentPage: 1,
});

onMounted(async () => {
  await fetchCampaigns();
});

const fetchCampaigns = async () => {
  await campStore.getCampaigns(
    pagination.value.limit,
    pagination.value.currentPage
  );
  campaigns.value = campStore.campaigns.map((campaign: any) => ({
    ...campaign,
    isEditing: false,
  }));
  pagination.value.totalRecords = campStore.pagination.totalRecords;
};

const onPageChange = (event: any) => {
  pagination.value.currentPage = Math.floor(event.first / event.rows) + 1;
  pagination.value.limit = event.rows;
  fetchCampaigns();
};

const activateCampaign = (id) => {
  campStore.activateCampaign(id);
};

const inactivateCampaign = (id) => {
  campStore.inactivateCampaign(id);
};

const toggleCampaignActivity = (id: number, isActive: boolean) => {
  if (isActive) {
    activateCampaign(id);
  } else {
    inactivateCampaign(id);
  }
};

const saveBid = (campaign) => {
  const formData = { ...campaign, bid: campaign.bid };
  campStore.updateCampaign(formData, campaign.id);
  campaign.isEditing = false;
};
</script>
