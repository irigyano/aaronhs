<template>
  <main class="max-w-full p-2">
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-3xl">{{ doc.title }}</h1>
      <p class="text-sm">{{ convertDateString(doc.publishedAt) }}</p>
      <article class="prose-base">
        <ContentRenderer :value="doc" />
      </article>
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
    lang="zh-TW"
    async
  />
</template>

<script setup>
import Giscus from "@giscus/vue";
</script>
