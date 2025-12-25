<script setup lang="ts">
type DividerVariant = 'solid' | 'dashed' | 'dotted' | 'gradient'
type DividerColor = 'default' | 'primary' | 'success' | 'warning' | 'danger'

interface Props {
  vertical?: boolean
  text?: string
  variant?: DividerVariant
  thickness?: 'thin' | 'normal' | 'thick'
  color?: DividerColor
  spacing?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  variant: 'solid',
  thickness: 'normal',
  color: 'default',
  spacing: 'md'
})

const thicknessClasses = {
  thin: props.vertical ? 'w-px' : 'h-px',
  normal: props.vertical ? 'w-0.5' : 'h-0.5',
  thick: props.vertical ? 'w-1' : 'h-1'
}

const colorClasses = {
  default: 'bg-slate-200',
  primary: 'bg-slate-900',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500'
}

const gradientClasses = {
  default: 'bg-gradient-to-r from-transparent via-slate-300 to-transparent',
  primary: 'bg-gradient-to-r from-transparent via-slate-900 to-transparent',
  success: 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent',
  warning: 'bg-gradient-to-r from-transparent via-amber-500 to-transparent',
  danger: 'bg-gradient-to-r from-transparent via-red-500 to-transparent'
}

const spacingClasses = {
  sm: 'my-2',
  md: 'my-4',
  lg: 'my-6'
}

const getLineClasses = () => {
  const base = props.vertical ? 'flex-1' : 'flex-1'
  const thickness = thicknessClasses[props.thickness]
  
  if (props.variant === 'gradient') {
    return `${base} ${thickness} ${gradientClasses[props.color]}`
  }
  
  if (props.variant === 'dashed') {
    return `${base} border-0 ${props.vertical ? 'border-l' : 'border-t'} border-dashed ${props.color === 'default' ? 'border-slate-300' : props.color === 'primary' ? 'border-slate-900' : props.color === 'success' ? 'border-emerald-500' : props.color === 'warning' ? 'border-amber-500' : 'border-red-500'}`
  }
  
  if (props.variant === 'dotted') {
    return `${base} border-0 ${props.vertical ? 'border-l' : 'border-t'} border-dotted ${props.color === 'default' ? 'border-slate-300' : props.color === 'primary' ? 'border-slate-900' : props.color === 'success' ? 'border-emerald-500' : props.color === 'warning' ? 'border-amber-500' : 'border-red-500'}`
  }
  
  return `${base} ${thickness} ${colorClasses[props.color]}`
}

const textColorClasses = {
  default: 'text-slate-400',
  primary: 'text-slate-700',
  success: 'text-emerald-600',
  warning: 'text-amber-600',
  danger: 'text-red-600'
}
</script>

<template>
  <div 
    :class="[
      'flex items-center',
      vertical ? 'flex-col h-full mx-4' : 'w-full',
      !vertical && spacingClasses[spacing]
    ]"
  >
    <div :class="getLineClasses()" />
    <template v-if="text || $slots.default">
      <div 
        :class="[
          'flex items-center gap-2 shrink-0',
          vertical ? 'py-3' : 'px-4',
          textColorClasses[color]
        ]"
      >
        <span v-if="text" class="text-sm font-medium whitespace-nowrap">{{ text }}</span>
        <slot />
      </div>
    </template>
    <div :class="getLineClasses()" />
  </div>
</template>
