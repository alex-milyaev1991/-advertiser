import { defineStore } from "pinia";
import api from "@/api/axios";

export const useCampStore = defineStore("campaigns", {
  state: () => ({
    campaigns: null,
    pagination: {
      totalRecords: 0,
      totalPages: 0,
      currentPage: 1,
      limit: 10,
    },
    creatives: [],
  }),
  actions: {
    async getCampaigns(page, limit) {
      try {
        const response = await api.getCampaigns(page, limit);
        this.campaigns = response.data.records;
        this.pagination.totalRecords = response.data.total_record;
        this.pagination.totalPages = response.data.total_page;
        this.pagination.currentPage = response.data.page;
        this.pagination.limit = response.data.limit;
      } catch (error) {
        console.error("Failed to get campaigns", error);
      }
    },
    async createCampaign(campaign) {
      try {
        const response = await api.createCampaign(campaign);
        console.log("response", response);
        return response;
      } catch (error) {
        console.error("create failed", error);
        throw error;
      }
    },
    async updateCampaign(formData, campaignId) {
      try {
        const response = await api.updateCampaign(formData, campaignId);
        console.log("response", response);
        return response;
      } catch (error) {
        console.error("create failed", error);
        throw error;
      }
    },
    saveCampaign(campaign) {
      const existingIndex = this.campaigns.findIndex(
        (c) => c.id === campaign.id
      );
      if (existingIndex !== -1) {
        this.campaigns[existingIndex] = campaign;
      } else {
        this.campaigns.push(campaign);
      }
    },
    async getCreatives(campaignId) {
      try {
        const response = await api.getCampaignCreatives(campaignId);
        console.log("getCreatives", response);
        this.creatives = response.data;
      } catch (error) {
        console.error("Failed to get campaigns", error);
      }
    },
    async addCreativesToCampaign(campaignId, creativeIds) {
      try {
        const response = await api.addCreativesToCampaign(
          campaignId,
          creativeIds
        );
        console.log("addCreativesToCampaign", response);
        return response;
      } catch (error) {
        console.error("create failed", error);
        throw error;
      }
    },
    async activateCampaign(id) {
      const resp = await api.activateCampaign(id);
      console.log(resp);
    },
    async inactivateCampaign(id) {
      const resp = await api.inactivateCampaign(id);
      console.log(resp);
    },
    async activateCreativeInCampaign(campId, creativeId) {
      const resp = await api.activateCreativeInCampaign(campId, creativeId);
      console.log("activated", resp);
    },
    async inactivateCreativeInCampaign(campId, creativeId) {
      const resp = await api.inactivateCreativeInCampaign(campId, creativeId);
      console.log(resp);
    },
  },
});
