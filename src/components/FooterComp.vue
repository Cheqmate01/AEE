<template>
  <div id="footer" class="flex flex-col bg-black text-white p-5 sm:px-10 py-6">
    <div class="flex flex-col langar-regular items-start gap-4">
      <button class="w-fit hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300 bd-txt"><a href="/about-us">ABOUT US</a></button>
      <button class="w-fit hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300 bd-txt"><a href="/contact-us">ENQUIRIES</a></button>
      <div class="space-y-0 w-full sm:w-2/5">
        <p class="bd-txt">NEWSLETTER</p>
        <form ref="newsletterForm" @submit.prevent="handleNewsletterSubscription" action="https://formsubmit.co/ajayielebireelite@gmail.com" method="post" class="flex flex-row border border-yellow-500 my-4 w-full">
          <input type="text" name="_subject" value="New Newsletter Subscription" class="hidden">
          <input type="email" name="email" id="" class="bg-black px-4 py-2 outline-none w-full" placeholder="Enter your email">
          <button type="submit" :submit="useAlertStore.setMessage('Done.')" class="text-black flex flex-row items-center justify-center bg-yellow-500 px-4 py-2 hover:bg-yellow-300 active:bg-yellow-300 transition-colors duration-300">
            Subscribe
            <img src="/right-arrow-black.png" width="20" alt="">
          </button>
        </form>
      </div>
      <ul class="flex flex-row items-center my-4 space-x-4">
        <li>
          <a title="Follow on Insragram" href="https://www.instagram.com/ajayielebireelitecamp?igsh=OWM1anRjbWd6djBt" target="_blank">
            <svg class="hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 36 36" x="0" y="0" width="36" height="36" fill="currentColor">
              <polygon points="24.89 8.93 26.42 10.91 28.75 10.22 29.22 7.64 27.06 6.83 25.83 7.64 24.89 8.93"/><path d="M35.18,7.86,27.58.49,6.78,2,1.52,8.5,0,29.33l8.65,6.21,22.56-.94L36,27.71ZM31.8,27.57l-4.11,4.37-18.3-.25-4.74-3.2L4.19,8.85l5.2-4.16,17.32-.52,5.44,4.38Z"/><path d="M17.67,9.25l-6.59,3.17L8.77,18l3.66,7,5.24,2.56,7.87-3L27,15l-3-3.88ZM18.43,24,15,22.83l-1.85-2.17.57-5.56,3-2.41,4.11.4,1.8,2.73,1,4.59Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a title="Follow on Facebook" href="https://www.facebook.com/share/1GumXQPYN6/?mibextid=wwXlfr" target="_blank">
            <svg class="hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 18 36" x="0" y="0" width="18" height="36" fill="currentColor">
              <polygon points="12.14 9.05 14.32 7.65 18.01 8.19 17.13 0 9.96 0.97 4.86 5.06 4.53 12.96 0.85 13.04 0 19.55 5.41 19.51 5.3 35.46 12.58 36 11.7 21.01 16.37 21.01 18.01 13.9 11.65 13.26 12.14 9.05"/>
            </svg>
          </a>
        </li>
        <li>
          <a title="Follow on X / Twitter" href="" target="_blank">
            <svg class="hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 37 36" x="0" y="0" width="37" height="36" fill="currentColor">
              <path d="M35.4,2.4l-0.2-2.3l-4,0.5L20.6,12.8L11.5,1.3l-1.1-0.9L8.8,0.1H2.6L1.4,0.8l-1.4,1.3l1.6,2.6l9.4,12.4l2.1,2.8l0.5,0.7l-0.5,0.5L2.9,32.7l-2,2.3l-0.9,1h1h0.7h1.5l2.8-2l10.9-10.7h-0.5l8,11.4l1.1,1.1l1.8,0.2l6.6-0.1l0.9-0.2l2.2-1.2l0.2-0.9L23.3,16.1L35.4,2.4z M28.1,33.5l-1.9-1.2L14.1,16.5l-9-11.9L4.3,2.9l1.1-0.5l2.9,0.7l12.1,15.2L32.6,33l-0.5,0.8L28.1,33.5z"/>
            </svg>
          </a>
        </li>
        <li>
          <a title="Follow on TikTok" href="https://www.tiktok.com/@ajayielebireelite?_t=ZM-8xiFZAx6S0L&_r=1" target="_blank">
            <div class="hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300">
              <i class="fi fi-brands-tik-tok"></i>
            </div>            
          </a>
        </li>
        <li>
          <a title="Follow on Youtube" href="https://youtube.com/@ajayielebireelitecamp?si=A75Ek3zdANOCoWTb" target="_blank">
            <svg class="hover:text-yellow-500 active:text-yellow-300 text-white transition-colors duration-300" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 41 36" x="0" y="0" width="41" height="36" fill="currentColor">
              <path d="M.22,7,1.67,29.16l3.94,4.07,28.74,1.53L40,30.69l.8-23.46L36.66,2.51,5,3.43ZM15.74,23.86l.45-11.56,9.57,6.5Z"/>
            </svg>
          </a>
        </li>

      </ul>
    </div>
    <div class="my-4 pb-8">
      <p class="text-gray-400 text-sm">© 2023 Ajayi Elebire Elite | All Rights Reserved</p>
      <a class="text-gray-400 text-sm" href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by rang - Flaticon</a>
      <p class="text-gray-400 text-sm">Site development by <a href="" target="_blank" class="text-yellow-500 hover:text-yellow-300 transition-colors duration-300">Raven Inc. - Dr. Ukwueze</a><a class="text-yellow-500 hover:text-yellow-300 text-sm float-right transition-colors duration-300 space-x-4" href="#page-top">Back to Top ↑</a></p>
    </div>
  </div>
</template>

<style>
.bd-txt {
  font-size: 25px;
}
</style>

<script setup>
import { ref } from 'vue';
import { useAlertStore } from '@/stores/alert';

const newsletterForm = ref(null);
const alert = useAlertStore();

async function handleNewsletterSubmit(e) {
  // Submit the form using fetch to FormSubmit
  const form = newsletterForm.value
  const formData = new FormData(form)
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    if (response.ok) {
      alert.setMessage('Subscribed successfully!')
      form.reset()
    } else {
      alert.setError('Subscription failed. Please try again.')
    }
  } catch {
    alert.setError('Network error. Please try again.')
  }
}
</script>