<script setup lang="ts">
import type { CardVariant } from '@/types/components'

interface Props {
  variant?: CardVariant
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  hoverable: false,
  padding: 'md'
})

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200',
  bordered: 'bg-white border-2 border-slate-900',
  elevated: 'bg-white border-0 shadow-xl shadow-slate-200/50',
  glass: 'bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg'
}

const paddingClasses: Record<'none' | 'sm' | 'md' | 'lg', string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6'
}
</script>

<template>
  <div 
    :class="[
      'rounded-xl overflow-hidden transition-all duration-300',
      variantClasses[variant],
      hoverable ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''
    ]"
  >
    <div v-if="$slots.header" :class="['border-b border-slate-100', paddingClasses[padding]]">
      <slot name="header" />
    </div>
    <div :class="paddingClasses[padding]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="['border-t border-slate-100 bg-slate-50/50', paddingClasses[padding]]">
      <slot name="footer" />
    </div>
  </div>
</template>
