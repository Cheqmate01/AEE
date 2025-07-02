<template>
  <div class="mx-1 sm:mx-20 my-10">
    <div>
      <p class="langar-regular text-2xl sm:text-6xl">THE BIG BANG 2025!!!</p>
    </div>
    <div class="sm:flex sm:justify-between bg-transparent">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-20 overflow-hidden fill-current text-yellow-200 invisible sm:visible">
        <g>
          <image href="/basketball.png" width="512" height="512" />
          <animateMotion
            path="M 0 -160 L 0 640 L 0 -200 L 0 640 L 0 -160"
            begin="0s"
            dur="8s"
            repeatCount="indefinite" />
        </g>      
      </svg>
      <div class="w-full sm:w-3/4">
        <p class="-mt-16 sm:mt-4">
          Ready to level up your game? The Ajayi Elebire Elite Basketball Camp is where passion meets performance. Train with top-tier coaches, push your limits, and learn the mindset of champions. From intense drills to real-game situations, every session is designed to help you grow stronger, faster, and smarter on the court.
        </p>
        <p class="mt-2 sm:mt-4">
          Whether you're chasing a scholarship, going pro, or just love the game — this is your chance to shine.
        </p>
        <strong class="mt-4">Take your first step toward greatness!</strong>
        <button class="flex flex-row mt-4">
          <a class="flex flex-row langar-regular text-lg sm:text-2xl text-yellow-500 hover:text-yellow-300 gap-hover" :href="`/register`">
            <p class="transition-colors duration-300">REGISTER NOW</p>
            <img src="/right-arrow-black.png" width="32">
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.gap-hover {
  gap: 0;
  transition: gap 0.3s;
}
.gap-hover:hover {
  gap: 1.5rem; /* same as Tailwind's gap-x-7 */
}
</style>