<template>
  <main class="prose max-w-full">
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <h1>{{ doc.publishedAt }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
