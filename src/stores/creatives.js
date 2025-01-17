import { defineStore } from "pinia";
import api from "@/api/axios";

export const useCreativeStore = defineStore("creatives", {
  state: () => ({
    creatives: [],
    pagination: {
      totalRecords: 4,
      limit: 10,
      currentPage: 1,
    },
  }),
  actions: {
    async getCreatives(page, limit) {
      try {
        const response = await api.getCreatives(page, limit);
        this.creatives = response.data.records;
        this.pagination.totalRecords = response.data.total_record;
        this.pagination.totalPages = response.data.total_page;
        this.pagination.currentPage = response.data.page;
        this.pagination.limit = response.data.limit;
      } catch (error) {
        console.error("Failed to get campaigns", error);
      }
    },
    async uploadVideo(formData) {
      try {
        const response = await api.uploadVideo(formData);
        console.log("uploadVideo response", response);
        return response;
      } catch (error) {
        console.error("Login failed", error);
        throw error;
      }
    },
    async uploadIcon(formData) {
      try {
        const response = await api.uploadIcon(formData);
        console.log("uploadVideo response", response);
        return response;
      } catch (error) {
        console.error("Login failed", error);
        throw error;
      }
    },
    async createCreative(formData) {
      try {
        const response = await api.createCreative(formData);
        console.log("response", response);
        return response;
      } catch (error) {
        console.error("create failed", error);
        throw error;
      }
    },
    async updateCreative(formData, creativeId) {
      try {
        const response = await api.updateCreative(formData, creativeId);
        console.log("response", response);
        return response;
      } catch (error) {
        console.error("create failed", error);
        throw error;
      }
    },
  },
});
