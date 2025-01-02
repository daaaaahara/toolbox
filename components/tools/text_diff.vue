<template>
  <div class="space-y-4">
    <!-- Input fields -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">Original Text</div>
        <UTextarea
          v-model="originalText"
          class="w-full"
          :rows="5"
        />
      </div>
      <div>
        <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">Modified Text</div>
        <UTextarea
          v-model="modifiedText"
          class="w-full"
          :rows="5"
        />
      </div>
    </div>

    <!-- Compare button -->
    <div class="flex justify-center">
      <UButton @click="compareDiff">Compare</UButton>
    </div>

    <!-- Diff result -->
    <template v-if="showDiff">
      <div>
        <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">Original</div>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
          <pre class="whitespace-pre-wrap font-mono text-sm"><code v-html="originalDiff" /></pre>
        </div>
      </div>

      <div>
        <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">Modified</div>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
          <pre class="whitespace-pre-wrap font-mono text-sm"><code v-html="modifiedDiff" /></pre>
        </div>
      </div>

      <!-- Legend -->
      <div class="flex gap-4 text-sm">
        <div class="flex items-center gap-2">
          <span class="inline-block w-3 h-3 bg-red-100 dark:bg-red-900"></span>
          <span>Removed</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-block w-3 h-3 bg-green-100 dark:bg-green-900"></span>
          <span>Added</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { diffWords } from 'diff'

const originalText = ref('')
const modifiedText = ref('')
const showDiff = ref(false)
const originalDiff = ref('')
const modifiedDiff = ref('')

const compareDiff = () => {
  const diff = diffWords(originalText.value, modifiedText.value)
  
  // Original text with removed parts highlighted
  originalDiff.value = diff.map(part => {
    if (part.removed) {
      return `<span class="bg-red-100 dark:bg-red-900">${part.value}</span>`
    }
    if (!part.added) {
      return part.value
    }
    return ''
  }).join('')

  // Modified text with added parts highlighted
  modifiedDiff.value = diff.map(part => {
    if (part.added) {
      return `<span class="bg-green-100 dark:bg-green-900">${part.value}</span>`
    }
    if (!part.removed) {
      return part.value
    }
    return ''
  }).join('')

  showDiff.value = true
}
</script>

<style scoped>
:deep(pre) {
  @apply overflow-x-auto;
}

:deep(span) {
  @apply rounded px-0.5;
}
</style>
