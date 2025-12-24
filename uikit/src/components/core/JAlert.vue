<script setup lang="ts">
import type { AlertVariant } from '@/types/components'

interface Props {
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  dismissible: false
})

const emit = defineEmits<{
  dismiss: []
}>()

const variantClasses: Record<AlertVariant, { bg: string; border: string; text: string; icon: string }> = {
  info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-500' },
  success: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', icon: 'text-emerald-500' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: 'text-amber-500' },
  error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-500' }
}

const classes = variantClasses[props.variant]
</script>

<template>
  <div 
    :class="[classes.bg, classes.border, classes.text, 'px-4 py-3 rounded-lg border']" 
    role="alert"
  >
    <div class="flex items-start gap-3">
      <!-- Icon -->
      <svg :class="[classes.icon, 'w-5 h-5 mt-0.5 shrink-0']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="variant === 'info'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path v-else-if="variant === 'success'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path v-else-if="variant === 'warning'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      <div class="flex-1 min-w-0">
        <p v-if="title" class="font-medium">{{ title }}</p>
        <div class="text-sm opacity-90">
          <slot />
        </div>
      </div>
      
      <button
        v-if="dismissible"
        @click="emit('dismiss')"
        class="p-1 hover:opacity-60 transition-opacity shrink-0"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
