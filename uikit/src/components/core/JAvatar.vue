<script setup lang="ts">
import type { AvatarSize } from '@/types/components'

interface Props {
  src?: string
  alt?: string
  size?: AvatarSize
  fallback?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  alt: '',
  fallback: ''
})

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-xl'
}

const initials = props.fallback || props.alt?.charAt(0)?.toUpperCase() || '?'
</script>

<template>
  <div 
    :class="[
      'rounded-full bg-slate-200 flex items-center justify-center overflow-hidden font-medium text-slate-600 ring-2 ring-white',
      sizeClasses[size]
    ]"
  >
    <img 
      v-if="src" 
      :src="src" 
      :alt="alt"
      class="w-full h-full object-cover"
    />
    <span v-else>{{ initials }}</span>
  </div>
</template>
