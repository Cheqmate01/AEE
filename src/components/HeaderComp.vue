<template>
  <div class="justify-center items-center flex flex-col">
    <div id="header" class="flex flex-row items-center justify-between px-4 w-4/5 h-20 bg-white shadow-md rounded-lg mt-4 fixed top-0 z-50">
      <button>
        <a href="/"><img src="/IMG_2789.JPEG" width="80" alt=""></a>
      </button>
      <div v-if="alert.message" class="bg-green-500 text-white text-center rounded-lg p-2">{{ alert.message }}</div>
      <div v-if="alert.error" class="bg-red-500 text-white text-center rounded-lg p-2">{{ alert.error }}</div>
    </div>
    <span id="page-top"></span>
    <div id="height-maintain-block" class="h-20 my-4"></div>
  </div>
</template>


<script setup>
import { useAlertStore } from '@/stores/alert'
const alert = useAlertStore()
</script>