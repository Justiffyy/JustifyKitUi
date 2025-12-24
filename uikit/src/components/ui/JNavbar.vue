<script setup lang="ts">
interface Props {
  title?: string
  variant?: 'default' | 'transparent' | 'bordered'
  sticky?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'UI Kit',
  variant: 'default',
  sticky: true
})
</script>

<template>
  <header 
    :class="[
      'w-full z-50',
      sticky ? 'sticky top-0' : '',
      variant === 'default' ? 'bg-white border-b border-slate-200' : '',
      variant === 'transparent' ? 'bg-transparent' : '',
      variant === 'bordered' ? 'bg-white border-b-2 border-slate-900' : ''
    ]"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex h-14 items-center justify-between">
        <span class="font-semibold text-slate-900">{{ title }}</span>
        <nav class="flex items-center gap-4">
          <slot />
        </nav>
      </div>
    </div>
  </header>
</template>
