<script setup lang="ts">
interface Props {
  label?: string
  description?: string
}

defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <label class="block">
    <span v-if="label" class="text-sm font-medium text-slate-700 mb-1 block">{{ label }}</span>
    <textarea
      v-model="model"
      class="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 transition-all duration-150 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 resize-none"
      rows="4"
    ><slot /></textarea>
    <span v-if="description" class="text-xs text-slate-500 mt-1 block">{{ description }}</span>
  </label>
</template>
