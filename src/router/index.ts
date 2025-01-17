// Composables
import { createRouter, createWebHistory } from "vue-router";

import { useAppStore } from "@/stores/app";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { layout: "default", requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { layout: "empty" },
  },
  {
    path: "/campaigns",
    component: () => import("@/views/Campaigns/Index.vue"),
    meta: { layout: "default", requiresAuth: true },
    children: [
      {
        path: "",
        name: "Campaigns",
        component: () => import("@/views/Campaigns/CampaignsList.vue"),
      },
      {
        path: "create",
        name: "CampaignsCreate",
        component: () => import("@/views/Campaigns/CampaignsCreate.vue"),
      },
      {
        path: ":id",
        name: "CampaignsEdit",
        component: () => import("@/views/Campaigns/CampaignsEdit.vue"),
      },
      {
        path: ":id/creatives",
        name: "CampaignsCreatives",
        component: () => import("@/views/Campaigns/CampaignsCreativeList.vue"),
      },
      {
        path: ":id/creatives/add",
        name: "CampaignsCreativesAdd",
        component: () => import("@/views/Campaigns/CampaignsCreativeAdd.vue"),
      },
    ],
  },
  {
    path: "/creatives",
    component: () => import("@/views/Creatives/Index.vue"),
    meta: { layout: "default", requiresAuth: true },
    children: [
      {
        path: "",
        name: "Creatives",
        component: () => import("@/views/Creatives/CreativeList.vue"),
      },
      {
        path: "create",
        name: "CreativeCreate",
        component: () => import("@/views/Creatives/CreativeCreate.vue"),
      },
      {
        path: ":id",
        name: "CreativeEdit",
        component: () => import("@/views/Creatives/CreativeEdit.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const appStore = useAppStore();

  if (to.meta.requiresAuth && !appStore.isAuthenticated) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }

  if (to.name === "Login" && appStore.isAuthenticated) {
    return { path: "/" };
  }
});

export default router;
