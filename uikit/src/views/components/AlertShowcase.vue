<script setup lang="ts">
import { ref } from 'vue'
import { JAlert } from '@/components'

const showAlert = ref(true)
</script>

<template>
  <section id="alerts" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Alerts</h2>
      <span class="text-xs text-slate-400">4 varyant</span>
    </div>
    
    <div class="space-y-3">
      <JAlert variant="info" title="Bilgi">Bu bir bilgilendirme mesajıdır.</JAlert>
      <JAlert variant="success">İşlem başarıyla tamamlandı!</JAlert>
      <JAlert variant="warning" title="Dikkat">Bu alanda dikkatli olun.</JAlert>
      <JAlert v-if="showAlert" variant="error" :dismissible="true" @dismiss="showAlert = false">
        Bir hata oluştu. Lütfen tekrar deneyin.
      </JAlert>
    </div>
  </section>
</template>
