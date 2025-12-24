<script setup lang="ts">
interface Props {
  disabled?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'default' | 'success' | 'danger'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: '',
  size: 'md',
  color: 'default'
})

const model = defineModel<boolean>({ default: false })

const toggle = () => {
  if (!props.disabled) {
    model.value = !model.value
  }
}

const sizeClasses = {
  sm: { track: 'h-4 w-7', thumb: 'h-3 w-3', translate: 'translate-x-3' },
  md: { track: 'h-5 w-9', thumb: 'h-4 w-4', translate: 'translate-x-4' },
  lg: { track: 'h-6 w-11', thumb: 'h-5 w-5', translate: 'translate-x-5' }
}

const colorClasses = {
  default: 'bg-slate-900',
  success: 'bg-emerald-500',
  danger: 'bg-red-500'
}
</script>

<template>
  <label 
    :class="[
      'inline-flex items-center gap-3 cursor-pointer select-none group',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="model"
      :disabled="disabled"
      :class="[
        'relative inline-flex shrink-0 rounded-full border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2',
        sizeClasses[size].track,
        model ? colorClasses[color] : 'bg-slate-200 group-hover:bg-slate-300'
      ]"
      @click="toggle"
    >
      <span
        :class="[
          'pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition-transform duration-200',
          sizeClasses[size].thumb,
          model ? sizeClasses[size].translate : 'translate-x-0'
        ]"
      />
    </button>
    <span v-if="label" class="text-slate-600 text-sm">{{ label }}</span>
  </label>
</template>
