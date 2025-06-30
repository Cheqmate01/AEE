<template>
  <div class="mb-32 mx-10">
    <div class="my-10 items-center text-center">
      <p class="langar-regular text-6xl">THE BIG BANG 2025!!!</p>
    </div>
    <form @submit.prevent="submitForm" class="max-w-sm mx-auto mt-6">
      <div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">First Name</label>
            <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="firstName" required=""
                type="text" value="" /></div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Last Name</label>
            <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="lastName" required=""
                type="text" value="" /></div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Other Name(s)</label>
            <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="otherNames"
                type="text" value="" /></div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Date of Birth</label>
            <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="dateOfBirth" required=""
                type="date" value="" /></div>
          </div>
        </div>
        <ul class="mt-1 space-y-1"></ul>
        <ul class="mt-1 space-y-1"></ul>
      </div>
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">Email</label>
        <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="email" required=""
            type="email" value="" /></div>
        <ul class="mt-1 space-y-1"></ul>
      </div>
      <div class="mt-6">
        <label class="block text-sm leading-5 font-medium text-gray-700">Mobile Number</label>
        <div class="mt-1"><input class="form-input w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="mobileNumber" required=""
            type="tel" value="" /></div>
        <ul class="mt-1 space-y-1"></ul>
      </div>
      <div class="mt-6">
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Height (ft.in)</label>
            <div class="mt-1">
              <input class="form-input w-full border border-gray-400 outline-yellow-500" required="" type="range"
                value="" min="3" max="8" step="0.1" v-model="height" />
              <span class="ml-2 test-sm font-semibold">{{ height }}</span>
            </div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Weight (lbs)</label>
            <div class="mt-1">
              <input class="form-input w-full border border-gray-400 outline-yellow-500" required="" type="range"
                value="" min="100" max="400" step="1" v-model="weight" />
              <span class="ml-2 test-sm font-semibold">{{ weight }}</span>
            </div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Jersey Size</label>
            <div class="mt-1 focus:border-yellow-500 text-sm font-semibold">
              <select class="form-input outline-none w-full border border-gray-400 border-l-0 border-t-0 border-r-4 rounded-md pl-3 py-1 outline-none focus:border-yellow-500 text-sm font-semibold" v-model="jerseySize" required="" type="text" value="">
                <option class="ml-2 text-sm font-semibold" value=""></option>
                <option class="ml-2 text-sm font-semibold" value="s">S</option>
                <option class="ml-2 text-sm font-semibold" value="l">L</option>
                <option class="ml-2 text-sm font-semibold" value="xl">XL</option>
                <option class="ml-2 text-sm font-semibold" value="xxl">XXL</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-sm leading-5 font-medium text-gray-700">Shoe Size</label>
            <div class="mt-1">
              <input class="form-input w-full border border-gray-400 outline-yellow-500" v-model="shoeSize" required="" type="range"
                value="" min="4" max="12" step="0.5" />
              <span class="ml-2 test-sm font-semibold">{{ shoeSize }}</span>
            </div>
          </div>
        </div>
        <ul class="mt-1 space-y-1"></ul>
        <ul class="mt-1 space-y-1"></ul>
      </div>
      <div>
        <div class="block text-sm leading-5 font-medium text-gray-700">
          <div  class="mt-6 flex flex-col space-y-4">
            <label>Passport Size Picture</label>
            <img v-if="passportPreview" :src="passportPreview" width="150" height="200" alt="Preview" />
            <input class="mt-1" type="file" @change="readPicturePass" />
            <ul class="mt-1 space-y-1"></ul>
          </div>
          <div class="mt-6 flex flex-col space-y-4">
            <label>Full Body Picture</label>
            <img v-if="fullPreview" :src="fullPreview" width="150" height="200" alt="Preview" />
            <input class="mt-1" type="file" @change="readPictureFull" />
            <ul class="mt-1 space-y-1"></ul>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div></div>
      </div>
      <div class="mt-6"><button
          class="group flex items-center justify-center rounded-full border font-medium py-2 focus:outline-hidden hover:bg-yellow-500 transition-colors duration-300 w-full"
          type="submit">
          <div class="">Sign Up</div>
        </button></div>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useAlertStore } from '@/stores/alert'
const passportFile = ref(null)
const fullFile = ref(null)
const firstName = ref('')
const lastName = ref('')
const otherNames = ref('')
const dateOfBirth = ref('')
const email = ref('')
const mobileNumber = ref('')
const jerseySize = ref('')
const shoeSize = ref(9)
const weight = ref(160)
const height = ref(6)
const passportPreview = ref(null)
const fullPreview = ref(null)
const alert = useAlertStore()


function readPicturePass(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    passportFile.value = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      passportPreview.value = e.target.result
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function readPictureFull(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    fullFile.value = input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      fullPreview.value = e.target.result
    };
    reader.readAsDataURL(input.files[0]);
  }
}


async function submitForm() {
  const formData = new FormData();
  formData.append('first_name', firstName.value);
  formData.append('last_name', lastName.value);
  formData.append('other_names', otherNames.value);
  formData.append('d_o_b', dateOfBirth.value);
  formData.append('email', email.value);
  formData.append('phone_number', mobileNumber.value);
  formData.append('height', height.value);
  formData.append('weight', weight.value);
  formData.append('jersey_size', jerseySize.value);
  formData.append('shoe_size', shoeSize.value);
  formData.append('passport_picture', passportFile.value);
  formData.append('full_picture', fullFile.value);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/user/submit/', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (response.ok) {
      alert.setMessage(data.message || 'Registration successful!');
    } else {
      let errorMsg = '';
      if (data.detail) {
        errorMsg = data.detail;
      } else if (typeof data === 'object') {
        errorMsg = Object.values(data).flat().join(' ');
      } else {
        errorMsg = 'There was an error. Please try again.';
      }
      alert.setError(errorMsg);
    }
  } catch (e) {
    alert.setError('Network error. Please try again.');
  }
}
</script>