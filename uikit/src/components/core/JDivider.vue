<script setup lang="ts">
interface Props {
  vertical?: boolean
  text?: string
}

withDefaults(defineProps<Props>(), {
  vertical: false
})
</script>

<template>
  <div 
    :class="[
      'flex items-center',
      vertical ? 'flex-col h-full' : 'w-full'
    ]"
  >
    <div :class="['bg-slate-200', vertical ? 'w-px flex-1' : 'h-px flex-1']" />
    <span v-if="text" class="px-4 text-sm text-slate-400 bg-white">{{ text }}</span>
    <div :class="['bg-slate-200', vertical ? 'w-px flex-1' : 'h-px flex-1']" />
  </div>
</template>
