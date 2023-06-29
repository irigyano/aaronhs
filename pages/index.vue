<template>
  <ContentNavigation v-slot="{ navigation }">
    <main class="flex flex-col gap-2 p-2">
      <div class="text-3xl p-1" v-for="link of navigation[0].children">
        <NuxtLink class="" :key="link._path" :to="link._path">
          {{ link.title }}
        </NuxtLink>
        <div class="w-fit text-sm my-1">
          {{ convertDateString(link.publishedAt) }}
        </div>
      </div>
    </main>
  </ContentNavigation>
</template>

<script setup>
useHead({ title: "Aaron Hsieh" });
</script>
