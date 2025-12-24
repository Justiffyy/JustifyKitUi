<script setup lang="ts">
import { JAvatar } from '@/components'
</script>

<template>
  <section id="avatars" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Avatars</h2>
      <span class="text-xs text-slate-400">5 boyut</span>
    </div>
    
    <div class="p-6 bg-slate-50 rounded-xl space-y-6">
      <div class="space-y-3">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Boyutlar</p>
        <div class="flex items-end gap-4">
          <JAvatar size="xs" fallback="XS" />
          <JAvatar size="sm" fallback="SM" />
          <JAvatar size="md" fallback="MD" />
          <JAvatar size="lg" fallback="LG" />
          <JAvatar size="xl" fallback="XL" />
        </div>
      </div>
      
      <div class="space-y-3">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Grup</p>
        <div class="flex -space-x-3">
          <JAvatar size="md" fallback="A" />
          <JAvatar size="md" fallback="B" />
          <JAvatar size="md" fallback="C" />
          <JAvatar size="md" fallback="+" />
        </div>
      </div>
    </div>
  </section>
</template>
