import axios from "axios";
const instance = axios.create({
  baseURL: window.APP_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = {
  login(email, password) {
    return instance.post("/login", {
      Email: email,
      Password: password,
    });
  },
  getProfile() {
    return instance.get("/profile");
  },
  getCampaigns(limit, page) {
    return instance.get("/campaign", {
      params: {
        limit: limit,
        page: page,
      },
    });
  },
  createCampaign(campaign) {
    return instance.post("/campaign", campaign);
  },
  updateCampaign(formData, сampaignId) {
    return instance.post(`/campaign/${сampaignId}`, formData);
  },
  getCampaignCreatives(campaignId) {
    return instance.get(`/campaign/${campaignId}/creative`);
  },
  addCreativesToCampaign(campaignId, creativeIds) {
    return instance.post(`/campaign/${campaignId}/creative`, creativeIds);
  },
  getCountry() {
    return instance.get("/dict/country");
  },
  getLang() {
    return instance.get("/dict/lang");
  },
  uploadVideo(formData) {
    return instance.post("/creative/video", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getCreatives(limit, page) {
    return instance.get("/library", {
      params: {
        limit: limit,
        page: page,
      },
    });
  },
  uploadIcon(formData) {
    return instance.post("/creative", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  createCreative(formData) {
    return instance.post("/library", formData);
  },
  updateCreative(formData, creativeId) {
    return instance.post(`/library/${creativeId}`, formData);
  },
  activateCampaign(id) {
    return instance.post(`/campaign/${id}/active`);
  },
  inactivateCampaign(id) {
    return instance.post(`/campaign/${id}/inactive`);
  },
  activateCreativeInCampaign(campId, creativeId) {
    return instance.post(`/campaign/${campId}/creative/${creativeId}/active`);
  },
  inactivateCreativeInCampaign(campId, creativeId) {
    return instance.post(`/campaign/${campId}/creative/${creativeId}/inactive`);
  },
};

export default api;
