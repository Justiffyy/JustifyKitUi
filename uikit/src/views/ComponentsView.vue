<script setup lang="ts">
import { MainLayout } from '@/layouts'
import PlaygroundView from '@/views/PlaygroundView.vue'
</script>

<template>
    <MainLayout title="Justify UI" subtitle="Modern Vue.js UI Component Library" navbar-variant="default">
        <template #hero>
            <h1 class="text-3xl font-bold text-slate-100 mb-2">Justify UI Kit</h1>
            <p class="text-slate-400 mb-4"> UI Component KIT</p>
            <div class="flex justify-center gap-2 flex-wrap">
                <span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">20+ Bileşenler</span>
                <span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">Bileşenlerin Çeşitleri</span>
                <span class="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">TypeScript Destekli</span>
            </div>
        </template>

        <PlaygroundView />
    </MainLayout>
</template>
