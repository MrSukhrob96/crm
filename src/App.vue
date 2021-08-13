<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/auth.vue";
import DefaultLayout from "@/layouts/default.vue";

export default {
  components: {
    AuthLayout,
    DefaultLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
};
</script>
