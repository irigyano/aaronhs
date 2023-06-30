<template>
  <button @click="toggle">toggle</button>
</template>

<script setup>
let isDarkMode = false;

const toggle = () => {
  if (isDarkMode) {
    document.documentElement.classList.remove("dark");
    isDarkMode = false;
  } else {
    document.documentElement.classList.add("dark");
    isDarkMode = true;
  }
};
</script>
