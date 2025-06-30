<template>
  <SidebarComp />
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<script setup>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import SidebarComp from "./components/SidebarComp.vue";
import { RouterView } from "vue-router";
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
