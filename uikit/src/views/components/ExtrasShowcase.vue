<script setup lang="ts">
import { ref } from 'vue'
import { JBadge, JSwitch } from '@/components'

const switchDefault = ref(true)
const switchSuccess = ref(false)
const switchDanger = ref(true)
const switchSm = ref(false)
const switchMd = ref(true)
const switchLg = ref(false)
</script>

<template>
  <section id="extras" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Badges & Switches</h2>
      <span class="text-xs text-slate-400">6 badge varyantı</span>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Badges Section -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-5">
        <div>
          <h3 class="font-medium text-slate-800 text-sm">Badge Varyantları</h3>
          <p class="text-xs text-slate-400 mt-0.5">Durum ve etiketleme için</p>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <JBadge variant="solid">Solid</JBadge>
          <JBadge variant="outline">Outline</JBadge>
          <JBadge variant="soft">Soft</JBadge>
          <JBadge variant="dot">Aktif</JBadge>
          <JBadge variant="gradient">Gradient</JBadge>
          <JBadge variant="glass">Glass</JBadge>
        </div>
        
        <div class="pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-500 mb-3">Boyutlar</p>
          <div class="flex flex-wrap items-center gap-3">
            <JBadge size="sm" variant="soft">Small</JBadge>
            <JBadge size="md" variant="soft">Medium</JBadge>
            <JBadge size="lg" variant="soft">Large</JBadge>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-500 mb-3">Şekiller</p>
          <div class="flex flex-wrap items-center gap-3">
            <JBadge :rounded="true" variant="solid">Yuvarlak</JBadge>
            <JBadge :rounded="false" variant="solid">Köşeli</JBadge>
          </div>
        </div>
      </div>

      <!-- Switches Section -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-5">
        <div>
          <h3 class="font-medium text-slate-800 text-sm">Switch Varyantları</h3>
          <p class="text-xs text-slate-400 mt-0.5">Açma/kapama işlemleri için</p>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Default</span>
            <JSwitch v-model="switchDefault" color="default" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Success</span>
            <JSwitch v-model="switchSuccess" color="success" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Danger</span>
            <JSwitch v-model="switchDanger" color="danger" />
          </div>
        </div>
        
        <div class="pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-500 mb-3">Boyutlar</p>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <JSwitch v-model="switchSm" size="sm" />
              <span class="text-xs text-slate-400">SM</span>
            </div>
            <div class="flex items-center gap-2">
              <JSwitch v-model="switchMd" size="md" />
              <span class="text-xs text-slate-400">MD</span>
            </div>
            <div class="flex items-center gap-2">
              <JSwitch v-model="switchLg" size="lg" />
              <span class="text-xs text-slate-400">LG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
