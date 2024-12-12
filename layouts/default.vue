<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
<script lang="ts" setup>

</script>

<style>
/* スクロールバーを常に表示 */
html {
  overflow-y: scroll;
}

/* モダンブラウザ向けのスクロールバースタイル */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
  border: 3px solid transparent;
  background-clip: padding-box;
}

/* Firefox向けのスクロールバースタイル */
* {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E0 transparent;
}

/* ダークモード時のFirefoxスクロールバー */
@media (prefers-color-scheme: dark) {
  * {
    scrollbar-color: #4A5568 transparent;
  }
}

</style>
