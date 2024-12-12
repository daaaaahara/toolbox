<template>
  <div>
    <UTextarea
      v-model="text"
      :rows="4"
      placeholder="テキストを入力してください"
    />
    <div class="mt-2 space-y-1">
      <p>総文字数: {{ counts.total }}</p>
      <p>空白除外: {{ counts.withoutSpace }}</p>
      <p>改行除外: {{ counts.withoutLineBreak }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const text = ref<string>('');

const counts = computed(() => ({
  total: text.value.length,
  withoutSpace: text.value.replace(/\s/g, '').length,
  withoutLineBreak: text.value.replace(/\n/g, '').length
}));
</script>
<style>

</style>
