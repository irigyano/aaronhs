<template>
  <ContentNavigation v-slot="{ navigation }">
    <main class="flex flex-col gap-2 p-2">
      <div
        class="p-1"
        v-for="link of navigation[0].children.sort(
          (blog1, blog2) =>
            new Date(blog2.publishedAt).getTime() -
            new Date(blog1.publishedAt).getTime()
        )"
      >
        <NuxtLink
          class="text-4xl font-semibold text-blue-500"
          :key="link._path"
          :to="link._path"
        >
          {{ link.title }}
        </NuxtLink>
        <div class="w-fit my-1 text-sm opacity-30">
          {{ link.publishedAt }}
        </div>
      </div>
    </main>
  </ContentNavigation>
</template>

<script setup>
useHead({ title: "Aaron Hsieh" });
</script>
