<template>
  <main class="prose max-w-full">
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <h1>{{ doc.publishedAt }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
  <Giscus
    host="https://giscus.app"
    id="comments"
    repo="irigyano/nuxt3-markdown-blog"
    repoId="R_kgDOJz5Cwg"
    category="Announcements"
    categoryId="DIC_kwDOJz5Cws4CXi-X"
    mapping="pathname"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="dark"
    data-loading="lazy"
    lang="zh-TW"
    async
  />
</template>

<script setup lang="ts">
import Giscus from "@giscus/vue";
</script>
