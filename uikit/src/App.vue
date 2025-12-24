<script setup lang="ts">
import { Navbar, Footer } from '@/components'
import PlaygroundView from '@/views/PlaygroundView.vue'
</script>

<template>
  <Navbar title="Justify UI" />
  
  <main class="flex-1 py-10 px-6">
    <PlaygroundView />
  </main>

  <Footer />
</template>
