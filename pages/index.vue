<template>
  <ContentNavigation v-slot="{ navigation }">
    <main class="bg-blue-500 flex flex-col gap-2 p-2">
      <div
        class="border-4 border-[#C7CFE7] rounded-lg w-fit text-lg p-1"
        v-for="link of navigation[0].children"
      >
        <span class="border">
          {{ convertDateString(link.publishedAt) }}
        </span>
        <NuxtLink class="" :key="link._path" :to="link._path">
          {{ link.title }}
        </NuxtLink>
      </div>
    </main>
  </ContentNavigation>
</template>

<script setup />
