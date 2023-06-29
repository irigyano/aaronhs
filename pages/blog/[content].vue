<template>
  <main class="max-w-full p-2">
    <ContentDoc>
      <template v-slot="{ doc }">
        <h1 class="text-4xl font-semibold text-blue-500">{{ doc.title }}</h1>
        <p class="text-sm opacity-30">
          {{ convertDateString(doc.publishedAt) }}
        </p>
        <article class="prose-base prose-img:mx-auto">
          <ContentRenderer :value="doc" />
        </article>
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

      <template #not-found>{{ navigateTo("/") }} </template>
    </ContentDoc>
  </main>
</template>

<script setup>
import Giscus from "@giscus/vue";
</script>
