<template>
  <div class="bg-black text-white py-20 space-y-10">
    <h1 class="langar-regular ml-10 mb-4 text-3xl sm:text-7xl">UPDATES
      <!-- <p class="float-right mr-10 text-sm text-yellow-500 hover:text-yellow-300">
        <a class="transition-colors duration-300" href="/updates">More Updates</a>
      </p> -->
    </h1>
    <div class="grid grid-cols-3 items-start gap-2 sm:gap-6 mx-3 sm:mx-6">
      <div v-for="update in updates" :key="update.id" class="space-y-4">
        <img v-if="update.event_picture" class="w-full" :src="`${update.event_picture}`" alt="">
        <p v-if="update.event_date" class="langar-regular">{{ update.event_date }}</p>
        <h1 class="text-xl font-bold mb-4">{{ update.event_theme }}</h1>
        <p v-if="update.description" class="mb-4">{{ update.description }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const updates = ref([])

onMounted(async () => {
  const res = await fetch('https://api.aeelite.online/api/updates/latest/')
  updates.value = await res.json()
})
</script>