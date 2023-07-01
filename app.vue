<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { style: "scrollbar-gutter:stable" },
  bodyAttrs: { class: "bg-white dark:bg-black text-black dark:text-white" },
});
</script>
