<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { style: "scrollbar-gutter:stable" },
  bodyAttrs: { class: "bg-blue-300 dark:bg-red-300" },
});
</script>
