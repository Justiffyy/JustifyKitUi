<script setup lang="ts">
import { JNavbar, JFooter } from '@/components'
</script>

<template>
  <section class="space-y-6">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Layout</h2>
      <span class="text-xs text-slate-400">Navbar & Footer</span>
    </div>
    
    <!-- Navbar Variants -->
    <div class="space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Navbar Varyantları</p>
      
      <div class="rounded-xl overflow-hidden border border-slate-200">
        <JNavbar title="Default" variant="default" :sticky="false">
          <a href="#" class="text-sm text-slate-500 hover:text-slate-900">Ana Sayfa</a>
          <a href="#" class="text-sm text-slate-500 hover:text-slate-900">Hakkında</a>
        </JNavbar>
      </div>

      <div class="rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-r from-slate-100 to-slate-50">
        <JNavbar title="Transparent" variant="transparent" :sticky="false">
          <a href="#" class="text-sm text-slate-500 hover:text-slate-900">Link</a>
        </JNavbar>
      </div>

      <div class="rounded-xl overflow-hidden border border-slate-200">
        <JNavbar title="Bordered" variant="bordered" :sticky="false">
          <a href="#" class="text-sm text-slate-500 hover:text-slate-900">Link</a>
        </JNavbar>
      </div>
    </div>

    <!-- Footer Variants -->
    <div class="space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Footer Varyantları</p>
      
      <div class="rounded-xl overflow-hidden border border-slate-200">
        <JFooter text="Default Footer" variant="default" />
      </div>

      <div class="rounded-xl overflow-hidden border border-slate-200">
        <JFooter text="Minimal Footer" variant="minimal" />
      </div>

      <div class="rounded-xl overflow-hidden border border-slate-200">
        <JFooter text="Justify UI Kit" variant="centered" />
      </div>
    </div>
  </section>
</template>
