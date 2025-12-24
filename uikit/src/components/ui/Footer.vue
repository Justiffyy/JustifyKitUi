<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 mt-auto">
    <div class="max-w-4xl mx-auto px-6 py-6">
      <div class="flex items-center justify-between text-sm text-slate-500">
        <span>Justify UI Kit</span>
        <span>&copy; {{ currentYear }}</span>
      </div>
    </div>
  </footer>
</template>
