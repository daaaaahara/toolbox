<template>
  <div class="space-y-4">
    <!-- Input -->
    <div>
      <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">Input Text</div>
      <UTextarea
        v-model="inputText"
        class="w-full"
        :rows="3"
      />
    </div>

    <!-- Output -->
    <div class="grid gap-4">
      <div v-for="(value, key) in convertedCases" :key="key" class="space-y-1">
        <div class="font-medium text-gray-700 dark:text-gray-300">{{ labels[key] }}</div>
        <UInput
          :model-value="value"
          class="w-full font-mono"
          readonly
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const inputText = ref('')

const labels = {
  upperCamel: 'Upper Camel Case (PascalCase)',
  lowerCamel: 'Lower Camel Case (camelCase)',
  upperSnake: 'Upper Snake Case (CONSTANT_CASE)',
  lowerSnake: 'Lower Snake Case (snake_case)',
  kebab: 'Kebab Case (kebab-case)'
}

const splitIntoWords = (text: string): string[] => {
  // 1. キャメルケースやパスカルケースを分割
  const withSpaces = text.replace(/([A-Z])/g, ' $1')
  
  // 2. 残りの区切り文字で分割
  return withSpaces
    .trim()
    .replace(/[^a-zA-Z0-9\s_-]/g, '') // 英数字、スペース、アンダースコア、ハイフンのみ許可
    .split(/[\s_-]+/) // スペース、アンダースコア、ハイフンで分割
    .filter(word => word.length > 0)
    .map(word => word.toLowerCase())
}

const convertedCases = computed(() => {
  const words = splitIntoWords(inputText.value)

  return {
    upperCamel: words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(''),

    lowerCamel: words
      .map((word, index) => 
        index === 0 
          ? word.toLowerCase() 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(''),

    upperSnake: words
      .map(word => word.toUpperCase())
      .join('_'),

    lowerSnake: words
      .join('_'),

    kebab: words
      .join('-')
  }
})
</script>

<style>

</style>
