<template>
  <nav class="flex items-center justify-between p-4 border-b dark:border-gray-700">
    <div class="flex items-center gap-4">
      <NuxtLink to="/">Home</NuxtLink>
    </div>

    <UButton
      icon="i-heroicons-moon-20-solid"
      :ui="{ rounded: 'rounded-full' }"
      color="gray"
      variant="ghost"
      @click="toggleDark"
    />
  </nav>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
nav a.router-link-active {
  font-weight: bold;
  color: #00DC82;
}
</style>
