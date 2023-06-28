<template>
  <nav
    class="flex items-center bg-white rounded py-1 pl-6 pr-11 border border-zinc-300 relative"
  >
    <NuxtLink
      to="/"
      class="border border-zinc-300 flex justify-center items-center basis-1/12 p-1"
      v-for="btn in 12"
    >
      <img
        class="w-full h-full object-cover"
        src="https://irowiki.org/w/images/6/6e/Double_Strafe.png?20070923200807"
      />
    </NuxtLink>
    <!-- <NuxtLink to="/categories">Categories</NuxtLink> -->
    <button
      class="absolute m-1 top-0 right-0 h-3 w-3 rounded-full bg-gradient-to-b border-[0.25px] border-zinc-300 from-white via-blue-700 to-white"
      @click="showAlert"
    ></button>
  </nav>
</template>

<script setup>
function showAlert() {
  alert("default action prevented");
}
</script>
