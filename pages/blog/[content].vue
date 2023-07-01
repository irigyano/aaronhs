<template>
  <main class="animate-slide-in p-2">
    <ContentDoc>
      <template v-slot="{ doc }">
        <h1 class="text-4xl font-semibold text-blue-500">{{ doc.title }}</h1>
        <p class="my-1 text-sm opacity-30">
          {{ doc.publishedAt }}
        </p>
        <article
          class="prose-base prose-pre:bg-black prose-img:mx-auto prose-img:rounded prose-pre:overflow-x-scroll"
        >
          <ContentRenderer :value="doc" />
        </article>
        <section class="lg:px-[5vw]">
          <Giscus
            host="https://giscus.app"
            id="comments"
            repo="irigyano/nuxt3-markdown-blog"
            repoId="R_kgDOJz5Cwg"
            category="Announcements"
            categoryId="DIC_kwDOJz5Cws4CXi-X"
            mapping="pathname"
            reactions-enabled="0"
            emitMetadata="0"
            inputPosition="top"
            theme=""
            lang="zh-TW"
            async
          />
        </section>
      </template>
      <template #empty>
        <h1>Testing Suspense</h1>
      </template>
      <template #not-found>{{ navigateTo("/") }} </template>
    </ContentDoc>
  </main>
</template>

<script setup>
import Giscus from "@giscus/vue";
</script>
