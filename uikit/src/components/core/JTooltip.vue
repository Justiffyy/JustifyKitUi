<script setup lang="ts">
interface Props {
  position?: 'top' | 'bottom' | 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  position: 'top'
})
</script>

<template>
  <div class="relative inline-block group">
    <slot />
    <div 
      :class="[
        'absolute z-50 px-2 py-1 text-xs font-medium text-white bg-slate-900 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 whitespace-nowrap',
        position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-2' : '',
        position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' : '',
        position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' : '',
        position === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2' : ''
      ]"
    >
      <slot name="content" />
    </div>
  </div>
</template>
