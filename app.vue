<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { style: "width: 100vw" },
  bodyAttrs: { class: "bg-white dark:bg-black text-black dark:text-white" },
});
</script>
