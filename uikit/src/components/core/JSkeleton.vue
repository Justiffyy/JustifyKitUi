<script setup lang="ts">
interface Props {
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string
  height?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'text',
  width: '100%',
  height: '1rem'
})
</script>

<template>
  <div 
    :class="[
      'animate-pulse bg-slate-200',
      variant === 'circular' ? 'rounded-full' : 'rounded',
      variant === 'text' ? 'h-4' : ''
    ]"
    :style="{ 
      width: variant === 'circular' ? height : width, 
      height: height 
    }"
  />
</template>
