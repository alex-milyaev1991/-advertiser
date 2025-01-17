<script lang="ts" setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import { useAppStore } from "@/stores/app";
import { useRoute } from "vue-router";

const router = useRoute();
const appStore = useAppStore();
const drawerVisible = ref(false);
const menuItems = [
  { label: "Overview", to: "/overview" },
  { label: "Campaigns", to: "/campaigns" },
  { label: "Report", to: "/report" },
  { label: "Creatives", to: "/creatives" },
];

const logout = () => {
  appStore.logout();
  router.push("/login");
};

const isActive = (to) => {
  return router.path.startsWith(to); // Проверяем, начинается ли текущий путь с указанного
};
</script>

<template>
  <div class="app-container" v-if="appStore.isAuthenticated">
    <Toolbar style="padding: 1rem">
      <template #start>
        <div class="header-content">
          <Button
            icon="pi pi-bars"
            class="p-button-text p-button-plain mobile-menu-btn"
            @click="drawerVisible = !drawerVisible"
          />
          <img
            src="../assets/tappads.jpg"
            width="150"
            class="logo vue mr-3"
            alt="Vue logo"
          />
          <div class="links-wrapper" v-for="link in menuItems">
            <Button
              as="router-link"
              :label="link.label"
              :to="link.to"
              class="mr-2"
              :class="{ active: isActive(link.to) }"
              text
              plain
            />
          </div>
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <button @click="logout">Logout</button>
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            style="width: 32px; height: 32px"
          />
        </div>
      </template>
    </Toolbar>

    <Drawer v-model:visible="drawerVisible">
      <template #container="{ closeCallback }">
        <div class="p-4">
          <ul class="list-none p-0 m-0 menu-links">
            <li v-for="item in menuItems" :key="item.label">
              <Button
                :label="item.label"
                as="router-link"
                :to="item.to"
                @click="closeCallback()"
                class="w-full text-left"
              />
            </li>
          </ul>
        </div>
      </template>
    </Drawer>

    <main class="main-content">
      <router-view />
    </main>

    <Toolbar class="app-footer">
      <template #start>
        <span>&copy; 2024 My Company. All rights reserved.</span>
      </template>
      <template #end>
        <span>Privacy Policy | Terms of Service</span>
      </template>
    </Toolbar>
  </div>
</template>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.active {
    background: var(--p-button-text-plain-hover-background);
    border-color: transparent;
    color: var(--p-button-text-plain-color);
  }
  .mobile-menu-btn {
    display: none;
  }
}

.main-content {
  flex: 1;
  padding: 20px;
}
.menu-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.app-footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
}

@media (max-width: 768px) {
  .header-content {
    .logo {
      width: 120px;
    }
    .links-wrapper {
      display: none;
    }
    .mobile-menu-btn {
      display: inline-block;
    }
  }
}
</style>
