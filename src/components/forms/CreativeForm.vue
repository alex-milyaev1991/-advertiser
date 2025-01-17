<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useCreativeStore } from "@/stores/creatives";
import { useRoute } from "vue-router";
import router from "@/router";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import InputNumber from "primevue/inputnumber";

const props = defineProps({
  creative: {
    type: Object,
    default: () => ({}),
  },
});

const creativeStore = useCreativeStore();
const route = useRoute();

interface FormData {
  call_to_action: string;
  companion_ad_height: number;
  companion_ad_image: string;
  companion_ad_width: number;
  cta_text: string;
  description: string;
  file_url: string;
  height: number;
  icon_url: string;
  image_url: string;
  name: string;
  price: string;
  rating: string;
  title: string;
  type: string;
  vast_body: string;
  vast_url: string;
  video_length: number;
  width: number;
}

const formData = ref<FormData>({
  call_to_action: "",
  companion_ad_height: 0,
  companion_ad_image: "",
  companion_ad_width: 0,
  cta_text: "",
  description: "",
  file_url: "",
  height: 0,
  icon_url: "",
  image_url: "",
  name: "",
  price: "",
  rating: "",
  title: "",
  type: "",
  vast_body: "",
  vast_url: "",
  video_length: 0,
  width: 0,
});

const videoPreview = ref<string | null>(null);
const iconPreview = ref<string | null>(null);
const uploadProgress = ref(0);
const saveErrors = ref();
const fileName = ref("");
const iconName = ref("");

const buttonTextOptions = [
  { label: "Go!", value: "Go!" },
  { label: "Install", value: "Install" },
  { label: "Open", value: "Open" },
  { label: "View", value: "View" },
  { label: "Buy", value: "Buy" },
  { label: "Subscribe", value: "Subscribe" },
  { label: "Play Now!", value: "Play Now!" },
  { label: "Join Now!", value: "Join Now!" },
  { label: "Follow Us!", value: "Follow Us!" },
];

const creativeType = [
  { label: "Video", value: "video" },
  { label: "Native", value: "native" },
];

const isFormFilled = computed(() => {
  return formData.value.name && formData.value.type && formData.value.file_url;
});

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

const createImagePreview = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    iconPreview.value = reader.result as string;
  };
};

const videoUpload = async (file: File) => {
  const uploadData = new FormData();
  uploadData.append("files", file);

  const resp = await creativeStore.uploadVideo(uploadData);
  const [dataObject] = resp.data.items;

  formData.value.file_url = dataObject.url;
  formData.value.width = dataObject.width;
  formData.value.height = dataObject.height;
  formData.value.video_length = dataObject.length;
  fileName.value = dataObject.name;
};

const iconUpload = async (file: File) => {
  const uploadData = new FormData();
  uploadData.append("files", file);

  const resp = await creativeStore.uploadIcon(uploadData);
  const [dataObject] = resp.data;
  console.log(dataObject);

  iconName.value = dataObject.name;
  formData.value.icon_url = dataObject.url;
  formData.value.image_url = dataObject.url;
};

const onFileSelect = (event: any, field: "video" | "icon") => {
  const selectedFile = event.files[0];

  if (field === "video") {
    captureScreenshotFromUrl(URL.createObjectURL(selectedFile), (preview) => {
      videoPreview.value = preview;
    });
    videoUpload(selectedFile);
  } else if (field === "icon") {
    iconUpload(selectedFile);
    createImagePreview(selectedFile);
  }
};
const onFileProgress = (event: any) => {
  uploadProgress.value = event.progress;
};

const clearFile = (field: "video" | "icon") => {
  if (field === "video") {
    videoPreview.value = null;
    fileName.value = "";
    (formData.value.file_url = ""), (formData.value.width = 0);
    formData.value.height = 0;
    formData.value.video_length = 0;
  } else if (field === "icon") {
    iconPreview.value = null;
    iconName.value = "";
    formData.value.icon_url = "";
  }
  uploadProgress.value = 0;
};

const saveCreative = async () => {
  if (!props.creative.name) {
    try {
      const resp = await creativeStore.createCreative(formData.value);
      saveResponce.value = resp;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        saveErrors.value = error.response.data.valid_errors;
      }
    }
  } else {
    const creativeId = route.params.id;
    await creativeStore.updateCreative(formData.value, creativeId);
  }
  router.push("/creatives");
};

const getErrorMessage = (field: string) => {
  if (!saveErrors.value) return "";
  const error = saveErrors.value.find(
    (error: { field: string }) => error.field === field
  );
  return error ? error.message : "";
};

watchEffect(() => {
  if (props.creative) {
    formData.value = {
      ...formData.value,
      ...props.creative,
    };
    if (props.creative.file_url) {
      captureScreenshotFromUrl(props.creative.file_url, (preview) => {
        videoPreview.value = preview;
      });
    }
    if (props.creative.icon_url) {
      iconPreview.value = props.creative.icon_url;
    }
  }
});
</script>

<template>
  <Card class="card-center">
    <template #content>
      <div class="form-wrapper">
        <div class="form-holder">
          <div class="field">
            <label for="title">Name</label>
            <InputText
              id="title"
              required
              v-model="formData.name"
              class="p-fluid"
            />
            <div v-if="getErrorMessage('name')" class="error-message">
              {{ getErrorMessage("name") }}
            </div>
          </div>
          <div class="field">
            <label for="type">Type</label>
            <Dropdown
              id="type"
              :options="creativeType"
              v-model="formData.type"
              optionLabel="label"
              optionValue="value"
              required
              class="p-fluid"
            />
            <div v-if="getErrorMessage('type')" class="error-message">
              {{ getErrorMessage("type") }}
            </div>
          </div>
          <div class="field">
            <label for="video">Video</label>
            <FileUpload
              name="video"
              url="/api/upload"
              accept="video/*"
              auto
              required
              class="p-fluid"
              :show-upload-button="false"
              :show-cancel-button="false"
              :maxFileSize="100000000"
              :custom-upload="true"
              @upload="videoUpload($event)"
              @select="onFileSelect($event, 'video')"
              @progress="onFileProgress"
            >
              <template #content="{ removeFileCallback, progress }">
                <div class="file-preview-row" v-if="formData.file_url">
                  <img
                    v-if="videoPreview"
                    :src="videoPreview"
                    alt="Video Preview"
                    class="file-preview"
                  />
                  <div class="file-details">
                    <p><strong>File name:</strong>{{ fileName }}</p>
                    <p><strong>Status:</strong> {{ "Uploaded" }}</p>
                    <div v-if="progress < 100" class="progress-bar">
                      <div
                        class="progress"
                        :style="{ width: `${progress}%` }"
                      ></div>
                    </div>
                  </div>
                  <Button
                    label="Remove Video"
                    @click="
                      removeFileCallback(0);
                      clearFile('video');
                    "
                    class="p-button-text p-fluid"
                  />
                </div>
              </template>
              <template v-if="!formData.file_url" #empty>
                <span>Drag and drop video here to upload.</span>
              </template>
            </FileUpload>
          </div>

          <div class="field">
            <label for="icon">Icon</label>
            <FileUpload
              name="icon"
              url="/api/upload"
              accept="image/*"
              required
              auto
              class="p-fluid"
              :show-upload-button="false"
              :show-cancel-button="false"
              :maxFileSize="5000000"
              @upload="iconUpload($event)"
              @select="onFileSelect($event, 'icon')"
              @progress="onFileProgress"
            >
              <template #content="{ removeFileCallback, progress }">
                <div class="file-preview-row" v-if="formData.icon_url">
                  <img
                    v-if="iconPreview"
                    :src="iconPreview"
                    alt="Icon Preview"
                    class="file-preview"
                  />
                  <div class="file-details">
                    <p><strong>File name:</strong> {{ iconName }}</p>
                    <p><strong>Status:</strong> {{ "Uploaded" }}</p>
                    <div v-if="progress < 100" class="progress-bar">
                      <div
                        class="progress"
                        :style="{ width: `${progress}%` }"
                      ></div>
                    </div>
                  </div>
                  <Button
                    label="Remove Icon"
                    @click="
                      removeFileCallback(0);
                      clearFile('icon');
                    "
                    class="p-button-text p-fluid"
                  />
                </div>
              </template>
              <template v-if="!formData.icon_url" #empty>
                <span>Drag and drop icon here to upload.</span>
              </template>
            </FileUpload>
          </div>

          <div class="field">
            <label for="subtitle">Description</label>
            <InputText
              id="subtitle"
              required
              v-model="formData.description"
              class="p-fluid"
            />
          </div>

          <div class="field">
            <label for="buttonText">Button Text</label>
            <Dropdown
              id="buttonText"
              :options="buttonTextOptions"
              v-model="formData.call_to_action"
              optionLabel="label"
              optionValue="value"
              required
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">CTA text</label>
            <InputText
              id="title"
              required
              v-model="formData.cta_text"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Price</label>
            <InputText
              id="title"
              required
              v-model="formData.price"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Rating</label>
            <InputText
              id="title"
              required
              v-model="formData.rating"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Title</label>
            <InputText
              id="title"
              required
              v-model="formData.title"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Vast body</label>
            <InputText
              id="title"
              required
              v-model="formData.vast_body"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Vast Url</label>
            <InputText
              id="title"
              required
              v-model="formData.vast_url"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Companion Ad Height</label>
            <InputNumber
              id="title"
              required
              v-model="formData.companion_ad_height"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Companion Ad Width</label>
            <InputNumber
              id="title"
              required
              v-model="formData.companion_ad_width"
              class="p-fluid"
            />
          </div>
          <div class="field">
            <label for="title">Companion Ad Image</label>
            <InputText
              id="title"
              required
              v-model="formData.companion_ad_image"
              class="p-fluid"
            />
          </div>
          <Button label="Save Creative" @click="saveCreative" class="p-fluid" />
        </div>
        <div class="creative-preview" v-if="isFormFilled">
          <video :src="formData.file_url" controls class="video-preview" />
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.form-wrapper {
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding: 2rem 0;
  border-radius: 15px;
  gap: 30px;
  flex-direction: row;

  .form-holder {
    width: 100%;
  }

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #ffffff;
  }

  .field {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1.5rem;

    label {
      width: 150px;
      min-width: 150px;
      margin-right: 20px;
      text-align: right;
      padding-top: 5px;
    }
    .error-message {
      color: red;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    input,
    .p-inputtext,
    .p-dropdown,
    .p-select,
    .p-inputnumber {
      flex-grow: 1;
      width: 100%;
    }
  }

  .file-preview-row {
    display: flex;
    align-items: center;
  }

  .file-preview {
    width: 70px;
    height: auto;
    margin-right: 1rem;
  }

  .file-details {
    display: flex;
    flex-direction: column;
  }

  .progress-bar {
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    margin-top: 5px;
    height: 10px;
  }

  .progress {
    background-color: #4caf50;
    height: 100%;
    border-radius: 10px;
  }

  .creative-preview {
    width: 50%;
    height: auto;

    video {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;

    .form-holder,
    .creative-preview {
      width: 100%;
    }

    .creative-preview video {
      width: 100%;
      height: auto;
    }
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
  @media (max-width: 520px) {
    .form-holder {
      .file-preview-row {
        flex-direction: column;
      }
    }
  }
}
</style>

<style lang="scss">
.p-fileupload {
  width: 100%;
  .p-button {
    margin: 0 auto;
  }
}
</style>
