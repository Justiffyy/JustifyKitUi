<script setup lang="ts">
import { ref } from 'vue'
import { JInput } from '@/components'

const inputValue = ref('')
</script>

<template>
  <section id="inputs" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Inputs</h2>
      <span class="text-xs text-slate-400">4 varyant • 3 boyut</span>
    </div>
    
    <!-- Varyantlar -->
    <div class="p-6 bg-slate-50 rounded-xl">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Varyantlar</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Default</label>
          <JInput v-model="inputValue" variant="default" placeholder="Yazın..." />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Filled</label>
          <JInput variant="filled" placeholder="Yazın..." />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Underline</label>
          <JInput variant="underline" placeholder="Yazın..." />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Ghost</label>
          <JInput variant="ghost" placeholder="Yazın..." />
        </div>
      </div>
    </div>
    
    <!-- Boyutlar & Durumlar -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 bg-slate-50 rounded-xl">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Boyutlar</p>
        <div class="space-y-3">
          <JInput size="sm" placeholder="Small" />
          <JInput size="md" placeholder="Medium" />
          <JInput size="lg" placeholder="Large" />
        </div>
      </div>
      
      <div class="p-6 bg-red-50/50 rounded-xl">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Hata Durumu</p>
        <JInput placeholder="Yazın..." error="Bu alan zorunludur" />
      </div>
    </div>
  </section>
</template>
