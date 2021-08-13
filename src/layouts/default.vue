<template>
  <div>
    <div class="app-main-layout">
      <header-component @click="isOpen = !isOpen" />
      <sidebar-component v-model="isOpen" />
      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
          <div class="fixed-action-btn">
            <router-link class="btn-floating btn-large blue" to="/record">
              <i class="large material-icons">add</i>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/index.vue";
import SidebarComponent from "@/components/sidebar/index.vue";

export default {
  components: {
    HeaderComponent,
    SidebarComponent,
  },
  data: () => ({
    isOpen: true,
  }),
};
</script>
