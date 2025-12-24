<script setup lang="ts">
import { JCard, JButton, JBadge } from '@/components'
</script>

<template>
  <section id="cards" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Cards</h2>
      <span class="text-xs text-slate-400">4 varyant</span>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Default -->
      <JCard variant="default" :hoverable="true">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-medium text-slate-900">Default</span>
            <JBadge variant="soft" size="sm">Temel</JBadge>
          </div>
        </template>
        <p class="text-slate-600 text-sm">Standart kart tasarımı, ince kenarlık ile.</p>
      </JCard>

      <!-- Bordered -->
      <JCard variant="bordered" :hoverable="true">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-medium text-slate-900">Bordered</span>
            <JBadge variant="solid" size="sm">Kalın</JBadge>
          </div>
        </template>
        <p class="text-slate-600 text-sm">Kalın kenarlık ile güçlü vurgu.</p>
      </JCard>

      <!-- Elevated -->
      <JCard variant="elevated" :hoverable="true">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-medium text-slate-900">Elevated</span>
            <JBadge variant="gradient" size="sm">Gölgeli</JBadge>
          </div>
        </template>
        <p class="text-slate-600 text-sm">Derin gölge ile yükseltilmiş görünüm.</p>
        <template #footer>
          <div class="flex gap-2">
            <JButton size="sm" variant="solid">Onayla</JButton>
            <JButton size="sm" variant="ghost">İptal</JButton>
          </div>
        </template>
      </JCard>

      <!-- Glass -->
      <JCard variant="glass" :hoverable="true">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-medium text-slate-900">Glass</span>
            <JBadge variant="glass" size="sm">Modern</JBadge>
          </div>
        </template>
        <p class="text-slate-600 text-sm">Cam efekti ile modern tasarım.</p>
      </JCard>
    </div>
  </section>
</template>
