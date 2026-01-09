<script setup lang="ts">
import { ref } from 'vue'

const menuItems = [
    { label: 'Dashboard' },
    { label: 'Projeler' },
    { label: 'Mesajlar' },
    { label: 'Ayarlar' }
]

const dropdownMenuItems = [
    { label: 'Dashboard' },
    {
        label: 'Projeler',
        children: [
            { label: 'Aktif Projeler' },
            { label: 'Tamamlananlar' },
            { label: 'Arşiv' }
        ]
    },
    {
        label: 'Ayarlar',
        children: [
            { label: 'Profil' },
            { label: 'Güvenlik' }
        ]
    }
]

const leftActiveItem = ref('Dashboard')
const rightActiveItem = ref('Dashboard')
const expandedItems = ref<string[]>(['Projeler'])
const dropdownActiveItem = ref('Aktif Projeler')
const floatingActiveItem = ref('Dashboard')

const toggleExpand = (label: string) => {
    if (expandedItems.value.includes(label)) {
        expandedItems.value = expandedItems.value.filter(item => item !== label)
    } else {
        expandedItems.value.push(label)
    }
}
</script>

<template>
    <section class="space-y-6">
        <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-slate-900">Sidebar</h2>
            <span class="text-xs text-slate-400">Yan Menü Komponenti</span>
        </div>

        <!-- Sol Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Sol Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <aside class="w-48 bg-white border-r border-slate-200 flex flex-col">
                    <div class="p-3 border-b border-slate-100">
                        <span class="font-semibold text-slate-900 text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="item in menuItems" :key="item.label" href="#" :class="[
                            'block px-3 py-2 rounded-lg text-sm',
                            leftActiveItem === item.label
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-600 hover:bg-slate-100'
                        ]" @click.prevent="leftActiveItem = item.label">
                            {{ item.label }}
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ leftActiveItem }} içeriği</p>
                </main>
            </div>
        </div>

        <!-- Sağ Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Sağ Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ rightActiveItem }} içeriği</p>
                </main>
                <aside class="w-48 bg-white border-l border-slate-200 flex flex-col">
                    <div class="p-3 border-b border-slate-100">
                        <span class="font-semibold text-slate-900 text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="item in menuItems" :key="item.label" href="#" :class="[
                            'block px-3 py-2 rounded-lg text-sm',
                            rightActiveItem === item.label
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-900 hover:bg-slate-100'
                        ]" @click.prevent="rightActiveItem = item.label">
                            {{ item.label }}
                        </a>
                    </nav>
                </aside>
            </div>
        </div>

        <!-- Genişletilmiş Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Genişletilmiş Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <aside class="w-64 bg-white border-r border-slate-200 flex flex-col">
                    <div class="flex items-center justify-between p-4 border-b border-slate-100">
                        <span class="font-semibold text-slate-900 text-sm">Menu</span>
                        <button class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 6l-6 6l6 6" />
                            </svg>
                        </button>
                    </div>
                    <nav class="flex-1 p-3 space-y-1">
                        <a v-for="(item, idx) in menuItems" :key="item.label" href="#" :class="[
                            'block px-3 py-2 rounded-lg text-sm',
                            idx === 0
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-900 hover:bg-slate-100'
                        ]">
                            {{ item.label }}
                        </a>
                    </nav>
                </aside>
            </div>
        </div>

        <!-- Daraltılmış Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Daraltılmış Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <aside class="w-16 bg-white border-r border-slate-200 flex flex-col">
                    <div class="flex items-center justify-center p-4 border-b border-slate-100">
                        <button class="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="(item, idx) in menuItems" :key="item.label" href="#" :class="[
                            'flex items-center justify-center p-2 rounded-lg text-xs',
                            idx === 0
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-900 hover:bg-slate-100'
                        ]" :title="item.label">
                            {{ item.label.charAt(0) }}
                        </a>
                    </nav>
                </aside>
            </div>
        </div>

        <!-- Dropdown Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Dropdown Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-72 bg-white">
                <aside class="w-52 bg-white border-r border-slate-200 flex flex-col">
                    <div class="p-3 border-b border-slate-200">
                        <span class="font-semibold text-slate-800 text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1 overflow-y-auto">
                        <template v-for="item in dropdownMenuItems" :key="item.label">
                            <!-- Parent Item -->
                            <a v-if="!item.children" href="#" :class="[
                                'block px-3 py-2 rounded-lg text-sm',
                                dropdownActiveItem === item.label
                                    ? 'bg-indigo-600 text-white font-medium'
                                    : 'text-slate-900 hover:bg-slate-100'
                            ]" @click.prevent="dropdownActiveItem = item.label">
                                {{ item.label }}
                            </a>

                            <!-- Expandable Item -->
                            <div v-else>
                                <button @click="toggleExpand(item.label)" :class="[
                                    'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm',
                                    expandedItems.includes(item.label)
                                        ? 'bg-slate-100 text-slate-800'
                                        : 'text-slate-600 hover:bg-slate-100'
                                ]">
                                    <span>{{ item.label }}</span>
                                    <svg :class="['w-4 h-4 transition-transform', expandedItems.includes(item.label) && 'rotate-180']"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <!-- Children -->
                                <div v-if="expandedItems.includes(item.label)" class="ml-3 mt-1 space-y-1">
                                    <a v-for="child in item.children" :key="child.label" href="#" :class="[
                                        'block px-3 py-1.5 rounded-lg text-sm',
                                        dropdownActiveItem === child.label
                                            ? 'bg-indigo-600 text-white font-medium'
                                            : 'text-slate-500 hover:bg-slate-100'
                                    ]" @click.prevent="dropdownActiveItem = child.label">
                                        {{ child.label }}
                                    </a>
                                </div>
                            </div>
                        </template>
                    </nav>
                </aside>
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ dropdownActiveItem }} içeriği</p>
                </main>
            </div>
        </div>

        <!-- Floating Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Floating Sidebar</p>
            <div class="flex rounded-xl overflow-hidden h-64 bg-slate-200 p-4">
                <aside class="w-48 bg-white rounded-xl shadow-lg flex flex-col mr-4">
                    <div class="p-3 border-b border-slate-100">
                        <span class="font-semibold text-slate-800 text-sm">Menu</span>
                    </div>
                    <nav class="flex-1 p-2 space-y-1">
                        <a v-for="item in menuItems" :key="item.label" href="#" :class="[
                            'block px-3 py-2 rounded-lg text-sm',
                            floatingActiveItem === item.label
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'text-slate-600 hover:bg-slate-100'
                        ]" @click.prevent="floatingActiveItem = item.label">
                            {{ item.label }}
                        </a>
                    </nav>
                </aside>
                <main class="flex-1 p-4 bg-white rounded-xl shadow-lg">
                    <p class="text-sm text-slate-600">{{ floatingActiveItem }} içeriği</p>
                </main>
            </div>
        </div>
    </section>
</template>
