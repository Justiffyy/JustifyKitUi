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
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Divider</p>
      <JDivider />
      <JDivider text="veya" />
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
