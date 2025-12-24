<script setup lang="ts">
import { ref } from 'vue'
import { JBadge, JSwitch } from '@/components'

const switchDefault = ref(true)
const switchSuccess = ref(false)
const switchDanger = ref(true)
</script>

<template>
  <section id="extras" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Badges & Switches</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Badges -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Badge Varyantları</p>
        <div class="flex flex-wrap gap-3">
          <JBadge variant="solid">Solid</JBadge>
          <JBadge variant="outline">Outline</JBadge>
          <JBadge variant="soft">Soft</JBadge>
          <JBadge variant="dot">Aktif</JBadge>
          <JBadge variant="gradient">Gradient</JBadge>
          <JBadge variant="glass">Glass</JBadge>
        </div>
        
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">Boyutlar</p>
        <div class="flex flex-wrap items-center gap-3">
          <JBadge size="sm">Small</JBadge>
          <JBadge size="md">Medium</JBadge>
          <JBadge size="lg">Large</JBadge>
        </div>
      </div>

      <!-- Switches -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Switch Varyantları</p>
        <div class="space-y-3">
          <JSwitch v-model="switchDefault" label="Default" color="default" />
          <JSwitch v-model="switchSuccess" label="Success" color="success" />
          <JSwitch v-model="switchDanger" label="Danger" color="danger" />
        </div>
        
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mt-4">Boyutlar</p>
        <div class="flex items-center gap-6">
          <JSwitch size="sm" label="SM" />
          <JSwitch size="md" label="MD" />
          <JSwitch size="lg" label="LG" />
        </div>
      </div>
    </div>
  </section>
</template>
