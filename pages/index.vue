<template>
  <ContentNavigation v-slot="{ navigation }">
    <div v-for="link of navigation[0].children">
      <NuxtLink
        class="border border-gray-500 rounded-lg"
        :key="link._path"
        :to="link._path"
      >
        {{ link.title }}
        {{ link.publishedAt }}
      </NuxtLink>
    </div>
  </ContentNavigation>
</template>
