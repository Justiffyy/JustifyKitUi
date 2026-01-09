<script setup lang="ts">
import { ref } from 'vue'
import { JSidebar } from '@/components'

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

const leftContent = ref('Dashboard')
const rightContent = ref('Dashboard')
const dropdownContent = ref('Aktif Projeler')
const floatingContent = ref('Dashboard')

const handleLeftSelect = (item: { label: string }) => {
    leftContent.value = item.label
}

const handleRightSelect = (item: { label: string }) => {
    rightContent.value = item.label
}

const handleDropdownSelect = (item: { label: string }) => {
    dropdownContent.value = item.label
}

const handleFloatingSelect = (item: { label: string }) => {
    floatingContent.value = item.label
}
</script>

<template>
    <section class="space-y-6">
        <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-white">Sidebar</h2>
            <span class="text-xs text-slate-400">Yan Menü Komponenti</span>
        </div>

        <!-- Sol Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Sol Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <JSidebar 
                    :items="menuItems" 
                    position="left"
                    width="sm"
                    title="Menu"
                    default-active="Dashboard"
                    @select="handleLeftSelect"
                />
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ leftContent }} içeriği</p>
                </main>
            </div>
        </div>

        <!-- Sağ Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Sağ Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ rightContent }} içeriği</p>
                </main>
                <JSidebar 
                    :items="menuItems" 
                    position="right"
                    width="sm"
                    title="Menu"
                    default-active="Dashboard"
                    @select="handleRightSelect"
                />
            </div>
        </div>

        <!-- Genişletilmiş Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Genişletilmiş Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-62 bg-white">
                <JSidebar 
                    :items="menuItems" 
                    position="left"
                    width="lg"
                    title="Menu"
                    default-active="Dashboard"
                />
            </div>
        </div>

        <!-- Daraltılmış Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Daraltılmış Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-56 bg-white">
                <JSidebar 
                    :items="menuItems" 
                    position="left"
                    width="collapsed"
                    title="Menu"
                    default-active="Dashboard"
                />
            </div>
        </div>

        <!-- Dropdown Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Dropdown Sidebar</p>
            <div class="flex rounded-xl border border-slate-300 overflow-hidden h-52 bg-white">
                <JSidebar 
                    :items="dropdownMenuItems" 
                    position="left"
                    width="md"
                    title="Menu"
                    default-active="Aktif Projeler"
                    @select="handleDropdownSelect"
                />
                <main class="flex-1 p-4 bg-slate-50">
                    <p class="text-sm text-slate-600">{{ dropdownContent }} içeriği</p>
                </main>
            </div>
        </div>

        <!-- Floating Sidebar -->
        <div class="p-6 bg-slate-100 rounded-xl space-y-4">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Floating Sidebar</p>
            <div class="flex rounded-xl overflow-hidden h-64 bg-slate-200 p-4">
                <JSidebar 
                    :items="menuItems" 
                    position="left"
                    width="sm"
                    variant="floating"
                    title="Menu"
                    default-active="Dashboard"
                    class="mr-4"
                    @select="handleFloatingSelect"
                />
                <main class="flex-1 p-4 bg-white rounded-xl shadow-lg">
                    <p class="text-sm text-slate-600">{{ floatingContent }} içeriği</p>
                </main>
            </div>
        </div>
    </section>
</template>
