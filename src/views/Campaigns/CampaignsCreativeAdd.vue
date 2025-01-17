<template>
  <div class="inner-page">
    <div class="flex justify-content-end px-5 mb-3">
      <Button @click="addCreatives" size="small">Add to campaign</Button>
    </div>
    <div class="card">
      <DataTable
        v-model:filters="filters"
        :value="creatives"
        tableStyle="min-width: 50rem"
        :paginator="true"
        :rows="pagination.limit"
        :totalRecords="pagination.totalRecords"
        :showFilterMatchModes="false"
        :first="(pagination.currentPage - 1) * pagination.limit"
        @page="onPageChange"
        filterDisplay="row"
      >
        <Column
          field="id"
          header="ID"
          sortable
          :filter="true"
          filterPlaceholder="Filter by ID"
          :filterMatchMode="FilterMatchMode.EQUALS"
          :sortFunction="sortById"
        />
        <Column
          field="name"
          header="Name"
          :filter="true"
          filterPlaceholder="Filter by Name"
          :filterMatchMode="FilterMatchMode.CONTAINS"
          :showFilterMatchModes="false"
        >
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              @input="filterCallback()"
              placeholder="Search by name"
            />
          </template>
        </Column>
        <Column header="Preview">
          <template #body="{ data }">
            <div class="preview-container">
              <img
                :src="videoPreviews[data.id]"
                alt="Preview"
                class="thumbnail"
                @click="showPreview(data)"
              />
              <Button @click="showPreview(data)" size="small" class="ml-2"
                >View</Button
              >
            </div>
          </template>
        </Column>
        <Column
          field="type"
          header="Creative Type"
          :filter="true"
          :filterMatchMode="FilterMatchMode.EQUALS"
        >
          <template #filter="{ filterModel, filterCallback }">
            <Dropdown
              v-model="filterModel.value"
              :options="creativeTypes"
              optionLabel="label"
              placeholder="Select Type"
              option-value="value"
              @change="filterCallback()"
            />
          </template>
        </Column>
        <Column
          field="moderation_status"
          header="Moderation Status"
          :filter="true"
          :filterMatchMode="FilterMatchMode.EQUALS"
        >
          <template #filter="{ filterModel, filterCallback }">
            <Dropdown
              v-model="filterModel.value"
              :options="moderationStatuses"
              optionLabel="label"
              option-value="value"
              placeholder="Select Status"
              @change="filterCallback"
            />
          </template>
        </Column>
        <Column header="Choose">
          <template #body="{ data }">
            <!-- <Button as="router-link" :to="`/creatives/${data.id}`" label="Edit" /> -->
            <Checkbox
              v-model="selectedCretive"
              :inputId="`creative${data.id}`"
              :name="DataTable.name"
              :value="data.id"
            />
          </template>
        </Column>
      </DataTable>

      <Dialog
        v-model:visible="isPreviewVisible"
        :header="selectedCreative?.name"
        style="width: 50vw"
        @hide="selectedCreative = null"
      >
        <template v-if="selectedCreative">
          <img
            :src="
              videoPreviews[selectedCreative.id] || selectedCreative.file_url
            "
            class="large-preview"
            v-if="selectedCreative.type != 'video'"
          />
          <video
            v-else
            class="video-preview"
            :src="selectedCreative.file_url"
            controls
          ></video>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import { FilterMatchMode } from "@primevue/core/api";
import { useCreativeStore } from "@/stores/creatives";
import { useCampStore } from "@/stores/campaigns";

import { useRoute } from "vue-router";
import router from "@/router";

interface Creative {
  id: number;
  name: string;
  file_url: string;
  type: string;
  moderation_status: string;
}

const route = useRoute();
const campaignId = ref(route.params.id);

const selectedCretive = ref();

const campStore = useCampStore();

const creativeStore = useCreativeStore();
const creatives = ref<Creative[]>(creativeStore.creatives);
const videoPreviews = ref<{ [key: number]: string }>({});
const pagination = ref({
  limit: 10,
  totalRecords: 0,
  currentPage: 1,
});

const allCreatives = ref([]);
const connectedCreatives = ref([]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.EQUALS },
  name: { value: null, matchMode: FilterMatchMode.CONTAINS },
  type: { value: null, matchMode: FilterMatchMode.EQUALS },
  moderation_status: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const isPreviewVisible = ref(false);
const selectedCreative = ref<Creative | null>(null);

const creativeTypes = ref([{ label: "Video", value: "video" }]);
const moderationStatuses = ref([
  { label: "Approved", value: "approved" },
  { label: "Pending", value: "pending" },
  { label: "Rejected", value: "rejected" },
]);

const fetchCreatives = async () => {
  await creativeStore.getCreatives(
    pagination.value.limit,
    pagination.value.currentPage
  );
  allCreatives.value = creativeStore.creatives;

  await campStore.getCreatives(campaignId.value);
  connectedCreatives.value = campStore.creatives;

  creatives.value = allCreatives.value.filter(
    (creative) => !connectedCreatives.value.some((c) => c.id === creative.id)
  );

  pagination.value.totalRecords = creatives.value.length;

  creatives.value.forEach((creative) => {
    if (creative.type === "video") {
      captureScreenshotFromUrl(creative.file_url, (preview) => {
        videoPreviews.value[creative.id] = preview;
      });
    }
  });
};

const captureScreenshotFromUrl = (
  url: string,
  callback: (preview: string) => void
) => {
  const videoElement = document.createElement("video");
  videoElement.src = url;
  videoElement.crossOrigin = "anonymous";

  videoElement.addEventListener("loadeddata", () => {
    videoElement.currentTime = 1;
  });

  videoElement.addEventListener("seeked", () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL("image/jpeg"));
    }
  });

  videoElement.load();
};

const onPageChange = (event: any) => {
  pagination.value.currentPage = Math.floor(event.first / event.rows) + 1;
  pagination.value.limit = event.rows;
  fetchCreatives();
};

const showPreview = (creative: Creative) => {
  selectedCreative.value = creative;
  isPreviewVisible.value = true;
};

const sortById = (event: any) => {
  creatives.value.sort((a: Creative, b: Creative) =>
    event.order === 1 ? a.id - b.id : b.id - a.id
  );
};

const addCreatives = () => {
  console.log("addCreatives");
  campStore.addCreativesToCampaign(campaignId.value, selectedCretive.value);
  router.push(`/campaigns/${campaignId.value}/creatives`);
};

onMounted(async () => {
  await fetchCreatives();
});
</script>

<style scoped>
.thumbnail {
  width: 50px;
  object-fit: cover;
  height: 30px;
  cursor: pointer;
}
.preview-container {
  display: flex;
}
.large-preview {
  width: 100%;
  height: auto;
}
.video-preview {
  max-width: 690px;
  width: 100%;
  display: block;
  max-height: calc(100vh - 120px);
  margin: 0 auto;
}
</style>
