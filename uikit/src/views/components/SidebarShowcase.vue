<script setup lang="ts">
import { ref } from 'vue'

const isCollapsed = ref(false)
const activeItem = ref('Dashboard')

const menuItems = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Projeler', icon: '📁', badge: 5 },
    { label: 'Mesajlar', icon: '💬', badge: 12 },
    { label: 'Ayarlar', icon: '⚙️' }
]
</script>

<template>
    <section class="space-y-6">
        <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-slate-900">Sidebar</h2>
            <span class="text-xs text-slate-400">Yan Menü Komponenti</span>
        </div>

        <!-- Default Sidebar -->
        <div class="p-6 bg-slate-50 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Default</p>
            <div class="flex rounded-xl border border-slate-200 overflow-hidden h-72 bg-white">
                <!-- Sidebar -->
                <aside :class="[
                    'bg-white border-r border-slate-200 flex flex-col transition-all duration-300',
                    isCollapsed ? 'w-14' : 'w-52'
                ]">
                    <div class="flex items-center justify-between p-3 border-b border-slate-100">
                        <span v-if="!isCollapsed" class="font-semibold text-slate-900 text-sm">Menu</span>
                        <button class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100"
                            @click="isCollapsed = !isCollapsed">
                            <svg :class="['w-4 h-4', isCollapsed && 'rotate-180']" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="item in menuItems" :key="item.label" href="#" :class="[
                            'flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm transition-colors',
                            activeItem === item.label
                                ? 'bg-indigo-50 text-indigo-700 font-medium'
                                : 'text-slate-600 hover:bg-slate-100',
                            isCollapsed && 'justify-center'
                        ]" @click.prevent="activeItem = item.label">
                            <span>{{ item.icon }}</span>
                            <span v-if="!isCollapsed" class="flex-1">{{ item.label }}</span>
                            <span v-if="item.badge && !isCollapsed"
                                class="px-1.5 py-0.5 text-xs bg-indigo-500 text-white rounded-full">
                                {{ item.badge }}
                            </span>
                        </a>
                    </nav>
                </aside>
                <!-- Content -->
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-500">{{ activeItem }} içeriği</p>
                </main>
            </div>
        </div>

        <!-- Dark Sidebar -->
        <div class="p-6 bg-slate-50 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Dark</p>
            <div class="flex rounded-xl overflow-hidden h-56 bg-white border border-slate-200">
                <aside class="w-52 bg-slate-900 flex flex-col">
                    <div class="p-3 border-b border-slate-800">
                        <span class="font-semibold text-white text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="(item, idx) in menuItems.slice(0, 3)" :key="item.label" href="#" :class="[
                            'flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm',
                            idx === 0
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        ]">
                            <span>{{ item.icon }}</span>
                            <span class="flex-1">{{ item.label }}</span>
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-500">İçerik alanı</p>
                </main>
            </div>
        </div>

        <!-- Bordered Sidebar -->
        <div class="p-6 bg-slate-50 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Bordered</p>
            <div class="flex rounded-xl overflow-hidden h-48 bg-white border border-slate-200">
                <aside class="w-48 bg-white border-r-2 border-indigo-500 flex flex-col">
                    <div class="p-3 border-b border-slate-100">
                        <span class="font-semibold text-slate-900 text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="(item, idx) in menuItems.slice(0, 2)" :key="item.label" href="#" :class="[
                            'flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm',
                            idx === 0
                                ? 'bg-indigo-50 text-indigo-700 border-l-2 border-indigo-500'
                                : 'text-slate-600 hover:bg-slate-50'
                        ]">
                            <span>{{ item.icon }}</span>
                            <span class="flex-1">{{ item.label }}</span>
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-500">İçerik alanı</p>
                </main>
            </div>
        </div>
    </section>
</template>
