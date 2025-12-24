<script setup lang="ts">
const currentYear = new Date().getFullYear()

interface Props {
  text?: string
  variant?: 'default' | 'minimal' | 'centered'
}

withDefaults(defineProps<Props>(), {
  text: 'UI Kit',
  variant: 'default'
})
</script>

<template>
  <footer 
    :class="[
      'mt-auto',
      variant === 'default' ? 'border-t border-slate-200 bg-white' : '',
      variant === 'minimal' ? 'border-t border-slate-100' : '',
      variant === 'centered' ? 'border-t border-slate-200 bg-slate-50' : ''
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-6">
      <div 
        :class="[
          'text-sm text-slate-500',
          variant === 'centered' ? 'text-center' : 'flex items-center justify-between'
        ]"
      >
        <template v-if="variant === 'centered'">
          <p>{{ text }}</p>
          <p class="mt-1">&copy; {{ currentYear }} Tüm hakları saklıdır.</p>
        </template>
        <template v-else>
          <span>{{ text }}</span>
          <span>&copy; {{ currentYear }}</span>
        </template>
      </div>
    </div>
  </footer>
</template>
