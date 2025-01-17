import { defineStore } from "pinia";
import api from "@/api/axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    profile: null,
    countries: null,
    langs: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await api.login(email, password);
        this.token = response.data.Token;
        localStorage.setItem("token", this.token);
        return response;
      } catch (error) {
        console.error("Login failed", error);
        throw error;
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
    async getProfile() {
      try {
        const response = await api.getProfile();
        this.profile = response.data;
        return response;
      } catch (error) {
        console.error("Get profile failed", error);
        throw error;
      }
    },
    async getCountry() {
      try {
        const response = await api.getCountry();
        this.countries = response.data;
        return response;
      } catch (error) {
        console.error("Get profile failed", error);
        throw error;
      }
    },
    async getLang() {
      try {
        const response = await api.getLang();
        this.langs = response.data;
        return response;
      } catch (error) {
        console.error("Get profile failed", error);
        throw error;
      }
    },
  },
});
