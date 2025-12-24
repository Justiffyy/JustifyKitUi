<script setup lang="ts">
import type { ProgressVariant } from '@/types/components'

interface Props {
  value?: number
  max?: number
  variant?: ProgressVariant
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  variant: 'default',
  showLabel: false,
  size: 'md'
})

const percentage = Math.min(100, Math.max(0, (props.value / props.max) * 100))

const variantClasses: Record<ProgressVariant, string> = {
  default: 'bg-slate-900',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500'
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3'
}
</script>

<template>
  <div class="w-full">
    <div v-if="showLabel" class="flex justify-between text-sm text-slate-600 mb-1">
      <span><slot>İlerleme</slot></span>
      <span>{{ Math.round(percentage) }}%</span>
    </div>
    <div :class="['w-full bg-slate-200 rounded-full overflow-hidden', sizeClasses[size]]">
      <div 
        :class="['h-full rounded-full transition-all duration-300', variantClasses[variant]]"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>
