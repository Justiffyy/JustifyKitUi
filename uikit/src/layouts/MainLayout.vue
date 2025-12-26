<script setup lang="ts">
import { Navbar, Footer } from '@/components'

interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Justify UI'
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :title="title" />
    
    <main class="flex-1 py-10 px-6">
      <slot />
    </main>

    <Footer />
  </div>
</template>