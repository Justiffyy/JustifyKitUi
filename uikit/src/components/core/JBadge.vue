<script setup lang="ts">
import type { BadgeVariant } from '@/types/components'

interface Props {
  variant?: BadgeVariant
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'md',
  rounded: true
})

const variantClasses: Record<BadgeVariant, string> = {
  solid: 'bg-slate-900 text-white',
  outline: 'bg-transparent border border-slate-300 text-slate-600',
  soft: 'bg-slate-100 text-slate-700',
  dot: 'bg-transparent text-slate-600 before:content-[""] before:w-2 before:h-2 before:rounded-full before:bg-slate-500 before:mr-1.5',
  gradient: 'bg-gradient-to-r from-slate-800 to-slate-600 text-white',
  glass: 'bg-white/20 backdrop-blur-sm text-slate-800 border border-white/30'
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-1.5 py-0.5 text-[10px]',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm'
}
</script>

<template>
  <span 
    :class="[
      'inline-flex items-center font-medium transition-all',
      variantClasses[variant],
      sizeClasses[size],
      rounded ? 'rounded-full' : 'rounded'
    ]"
  >
    <slot />
  </span>
</template>
