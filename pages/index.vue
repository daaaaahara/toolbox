<template>
  <UContainer class="py-4 sm:py-6 lg:py-8">
    <div class="space-y-8">
      <template v-for="(row, rowIndex) in toolRows" :key="rowIndex">
        <div class="grid grid-cols-4 gap-4">
          <UCard v-for="tool in row" :key="tool.id" class="hover:shadow-lg transition-shadow">
            <template #header>
              <h3 class="text-lg font-semibold">{{ tool.name }}</h3>
            </template>
            
            <p>{{ tool.subscription }}</p>
            
            <template #footer>
              <UButton color="primary" @click="toggleTool(tool, rowIndex)">
                {{ tool.component === selectedTool?.component ? 'Close' : 'Open' }}
              </UButton>
            </template>
          </UCard>
        </div>

        <div v-if="selectedTool && selectedRowIndex === rowIndex" class="border rounded-lg p-4">
          {{ console.log(selectedTool.component) }}
          <component :is="selectedTool.component" />
        </div>
      </template>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const { tools = [] } = useFetchTools()
const selectedTool = ref<any>(null)
const selectedRowIndex = ref<number | null>(null)

// toolsを4つずつの行に分割
const toolRows = computed(() => {
  const rows = []
  for (let i = 0; i < tools.length; i += 4) {
    rows.push(tools.slice(i, i + 4))
  }
  return rows
})

const toggleTool = (tool: any, rowIndex: number) => {
  if (selectedTool.value?.component === tool.component) {
    selectedTool.value = null
    selectedRowIndex.value = null
  } else {
    selectedTool.value = tool
    selectedRowIndex.value = rowIndex
  }
}



</script>

<style>

</style>
