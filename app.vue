<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const admin = false;
const layout = admin ? 'custom' : 'default';
</script>

<style></style>
