<template>
  <div class="flex gap-4">
    <div class="flex-1">
      <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">絵文字</div>
      <UTextarea
        v-model="emojiText"
        class="w-full"
        :rows="5"
      />
    </div>

    <div class="flex flex-col justify-center gap-2">
      <UButton @click="convertToAlias">→</UButton>
      <UButton @click="convertToEmoji">←</UButton>
    </div>

    <div class="flex-1">
      <div class="mb-2 font-medium text-gray-700 dark:text-gray-300">エイリアス (:emoji:)</div>
      <UTextarea
        v-model="aliasText"
        class="w-full"
        :rows="5"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as emoji from 'node-emoji'

const emojiText = ref('')
const aliasText = ref('')

const convertToAlias = () => {
  aliasText.value = emoji.unemojify(emojiText.value)
}

const convertToEmoji = () => {
  emojiText.value = emoji.emojify(aliasText.value)
}
</script>
