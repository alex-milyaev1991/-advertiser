<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from "vue";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import MultiSelect from "primevue/multiselect";
import DatePicker from "primevue/datepicker";

import { useAppStore } from "@/stores/app";
import { useCampStore } from "@/stores/campaigns";
import { useRoute } from "vue-router";

const props = defineProps({
  campaign: {
    type: Object,
    default: () => ({}),
  },
});

const route = useRoute();
import router from "@/router";

const appStore = useAppStore();
const campStore = useCampStore();

const formData = ref({
  name: "",
  campaign_type: "video",
  is_adult: false,
  is_gambling: false,
  is_rewarded: false,
  target_url: "",
  date_start: new Date(),
  date_end: new Date(new Date().setDate(new Date().getDate() + 30)),
  bid: 0,
  bid_target: null,
  freq_cap: 0,
  limit_spend_day: 0,
  limit_spend_total: 0,
  spend_evenly: false,
  target_geo: [],
  target_os: [],
  target_premium: false,
  target_lang: [],
  impression_pixel: ["string"],
});

const saveErrors = ref();

const campaignTypeOptions = ref([{ label: "Video", value: "video" }]);

const bidTargetOptions = ref([{ label: "CPM", value: "cpm" }]);

const osOptions = ref([
  { label: "Android", value: "Android" },
  { label: "iOS", value: "iOS" },
  { label: "Not selected", value: null },
]);

const impressionPixelOptions = ref([]);

const countryOptions = computed(() => {
  return appStore.countries;
});

const langOptions = computed(() => {
  return appStore.langs;
});

watchEffect(() => {
  if (props.campaign) {
    formData.value = {
      ...formData.value,
      ...props.campaign,
      date_start: props.campaign.date_start
        ? new Date(props.campaign.date_start)
        : new Date(),
      date_end: props.campaign.date_end
        ? new Date(props.campaign.date_end)
        : new Date(new Date().setDate(new Date().getDate() + 30)),
    };
  }
});

onMounted(async () => {
  await appStore.getCountry();
  await appStore.getLang();
});

const getErrorMessage = (field: string) => {
  if (!saveErrors.value) return "";
  const error = saveErrors.value.find(
    (error: { field: string }) => error.field === field
  );
  return error ? error.message : "";
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const saveCampaign = async () => {
  console.log("save");
  const dataToSend = {
    ...formData.value,
    date_start: formatDate(formData.value.date_start),
    date_end: formatDate(formData.value.date_end),
  };
  if (!props.campaign.name) {
    try {
      await campStore.createCampaign(dataToSend);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        saveErrors.value = error.response.data.valid_errors;
      }
    }
  } else {
    const campaignId = route.params.id;
    await campStore.updateCampaign(dataToSend, campaignId);
  }
  console.log("Form data:", dataToSend);
  router.push("/campaigns");
};
</script>

<template>
  <Card class="card-center">
    <template #content>
      <div class="form-wrapper">
        <h3>Basic Settings</h3>
        <div class="field">
          <label for="name">Name</label>
          <InputText id="name" v-model="formData.name" />
        </div>
        <div class="field">
          <label for="campaignType">Bid Target</label>
          <Dropdown
            id="campaignType"
            :options="campaignTypeOptions"
            v-model="formData.campaign_type"
            optionLabel="label"
            optionValue="value"
          />
        </div>
        <div class="field">
          <label>Attributes</label>
          <div class="checkbox-wrapper pl-0">
            <div class="field-checkbox pl-0">
              <Checkbox
                v-model="formData.is_adult"
                :binary="true"
                inputId="isAdult"
              />
              <label for="isAdult">Adult</label>
            </div>
            <div class="field-checkbox pl-0">
              <Checkbox
                v-model="formData.is_gambling"
                :binary="true"
                inputId="isGambling"
              />
              <label for="isGambling">Gambling</label>
            </div>
            <div class="field-checkbox pl-0">
              <Checkbox
                v-model="formData.is_rewarded"
                :binary="true"
                inputId="isRewarded"
              />
              <label for="isRewarded">Rewarded</label>
            </div>
          </div>
        </div>
        <div class="field">
          <label for="targetUrl">Target URL</label>
          <InputText id="targetUrl" v-model="formData.target_url" />
        </div>
        <div class="field">
          <label for="dateStart">Start Date</label>
          <DatePicker
            id="dateStart"
            dateFormat="dd/mm/yy"
            v-model="formData.date_start"
          />
        </div>
        <div class="field">
          <label for="dateEnd">End Date</label>
          <DatePicker
            id="dateEnd"
            dateFormat="dd/mm/yy"
            v-model="formData.date_end"
          />
        </div>
        <h3>Budget</h3>
        <div class="field">
          <label for="bid">Bid</label>
          <InputNumber
            id="bid"
            v-model="formData.bid"
            mode="currency"
            currency="USD"
          />
        </div>
        <div class="field">
          <label for="bidTarget">Bid Target</label>
          <Dropdown
            id="bidTarget"
            :options="bidTargetOptions"
            v-model="formData.bid_target"
            optionLabel="label"
            optionValue="value"
          />
        </div>
        <div class="field">
          <label for="freqCap">Freq cap</label>
          <InputNumber id="freqCap" v-model="formData.freq_cap" />
        </div>
        <div class="field">
          <label for="dailyCap">Daily Cap</label>
          <InputNumber id="dailyCap" v-model="formData.limit_spend_day" />
        </div>
        <div class="field">
          <label for="totalCap">Total Cap</label>
          <InputNumber id="totalCap" v-model="formData.limit_spend_total" />
        </div>
        <div class="field-checkbox">
          <Checkbox
            v-model="formData.spend_evenly"
            :binary="true"
            inputId="spendEvenly"
          />
          <label for="spendEvenly">Spend evenly</label>
        </div>

        <!-- Targeting -->
        <h3>Targeting</h3>
        <div class="field">
          <label for="geo">Geo (Countries)</label>
          <MultiSelect
            id="geo"
            :options="countryOptions"
            v-model="formData.target_geo"
            optionLabel="title"
            optionValue="code"
          />
        </div>
        <div class="field">
          <label for="os">Operating System</label>
          <MultiSelect
            id="os"
            :options="osOptions"
            v-model="formData.target_os"
            optionLabel="label"
            optionValue="value"
          />
        </div>
        <div class="field-checkbox">
          <Checkbox
            v-model="formData.target_premium"
            :binary="true"
            inputId="isPremium"
          />
          <label for="isPremium">Is Premium</label>
        </div>
        <div class="field">
          <label for="language">Language</label>
          <MultiSelect
            id="language"
            v-model="formData.target_lang"
            :options="langOptions"
            optionLabel="title"
            display="chip"
            placeholder="Select languages"
            optionValue="code"
          />
        </div>
        <div class="field">
          <label for="impressionPixel">Impression pixel</label>
          <MultiSelect
            id="impressionPixel"
            v-model="formData.impression_pixel"
            :options="impressionPixelOptions"
            optionLabel="label"
            display="chip"
            placeholder="Select impression pixel"
            optionValue="value"
          />
        </div>
        <Button label="Save Campaign" @click="saveCampaign" />
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  border-radius: 15px;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .field {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1.5rem;

    & > label {
      width: 150px;
      min-width: 150px;
      margin-right: 20px;
      text-align: right;
      padding-top: 5px;
    }

    input,
    .p-inputtext,
    .p-dropdown,
    .p-calendar,
    .p-inputchips,
    .p-multiselect,
    .p-inputnumber,
    .p-datepicker,
    .p-select {
      flex-grow: 1;
      width: 100%;
    }
  }

  .checkbox-wrapper,
  .field-checkbox {
    padding-left: 170px;
    display: flex;
    gap: 20px;
    label {
      margin-left: 0;
    }
  }

  .radio {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      color: #cfcfcf;
    }
  }

  .p-chips {
    width: 100%;
  }
  .list-section {
    width: 100%;
  }
  @media (max-width: 768px) {
    .field {
      flex-wrap: wrap;
      label {
        width: 100%;
        min-width: 100%;
        text-align: left;
        margin-right: 0;
      }
    }
  }
}
</style>
