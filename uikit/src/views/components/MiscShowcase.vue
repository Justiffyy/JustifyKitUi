<script setup lang="ts">
import { ref } from 'vue'
import { JTextarea, JDivider, JSkeleton, JTooltip, JButton } from '@/components'

const textValue = ref('')
</script>

<template>
  <section id="misc" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Diğer</h2>
      <span class="text-xs text-slate-400">Textarea, Skeleton, Divider, Tooltip</span>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Textarea -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Textarea</p>
        <JTextarea 
          v-model="textValue"
          label="Mesajınız" 
          description="En az 10 karakter yazın."
        />
      </div>
      
      <!-- Skeleton -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Skeleton</p>
        <div class="flex items-center gap-4">
          <JSkeleton variant="circular" height="3rem" />
          <div class="flex-1 space-y-2">
            <JSkeleton width="60%" height="1rem" />
            <JSkeleton width="40%" height="0.75rem" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Divider -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-6">
      <div>
        <h3 class="font-medium text-slate-800 text-sm">Divider</h3>
        <p class="text-xs text-slate-400 mt-0.5">İçerik ayırıcı çizgiler</p>
      </div>
      
      <!-- Variants -->
      <div class="space-y-3">
        <p class="text-xs text-slate-500">Varyantlar</p>
        <div class="space-y-3">
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Solid</span>
            <JDivider variant="solid" spacing="sm" />
          </div>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Dashed</span>
            <JDivider variant="dashed" spacing="sm" />
          </div>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Dotted</span>
            <JDivider variant="dotted" spacing="sm" />
          </div>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Gradient</span>
            <JDivider variant="gradient" spacing="sm" />
          </div>
        </div>
      </div>

      <!-- With Text -->
      <div class="pt-4 border-t border-slate-200 space-y-3">
        <p class="text-xs text-slate-500">Metin ile Kullanım</p>
        <JDivider text="veya" spacing="sm" />
        <JDivider text="devam et" variant="gradient" spacing="sm" />
      </div>

      <!-- Colors -->
      <div class="pt-4 border-t border-slate-200 space-y-3">
        <p class="text-xs text-slate-500">Renkler</p>
        <div class="grid grid-cols-2 gap-3">
          <JDivider color="default" text="Default" spacing="sm" />
          <JDivider color="primary" text="Primary" spacing="sm" />
          <JDivider color="success" text="Success" spacing="sm" />
          <JDivider color="warning" text="Warning" spacing="sm" />
          <JDivider color="danger" text="Danger" spacing="sm" />
        </div>
      </div>

      <!-- Thickness -->
      <div class="pt-4 border-t border-slate-200 space-y-3">
        <p class="text-xs text-slate-500">Kalınlık</p>
        <div class="space-y-3">
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">İnce</span>
            <JDivider thickness="thin" color="primary" spacing="sm" />
          </div>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Normal</span>
            <JDivider thickness="normal" color="primary" spacing="sm" />
          </div>
          <div class="flex items-center gap-4 text-sm text-slate-500">
            <span class="w-16 shrink-0">Kalın</span>
            <JDivider thickness="thick" color="primary" spacing="sm" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tooltip -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Tooltip</p>
      <div class="flex gap-4">
        <JTooltip position="top">
          <JButton variant="outline" size="sm">Üst</JButton>
          <template #content>Tooltip üstte</template>
        </JTooltip>
        <JTooltip position="bottom">
          <JButton variant="outline" size="sm">Alt</JButton>
          <template #content>Tooltip altta</template>
        </JTooltip>
        <JTooltip position="left">
          <JButton variant="outline" size="sm">Sol</JButton>
          <template #content>Solda</template>
        </JTooltip>
        <JTooltip position="right">
          <JButton variant="outline" size="sm">Sağ</JButton>
          <template #content>Sağda</template>
        </JTooltip>
      </div>
    </div>
  </section>
</template>
