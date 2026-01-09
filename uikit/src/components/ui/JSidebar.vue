<script setup lang="ts">
import { ref, computed } from 'vue'

interface MenuItem {
    label: string
    icon?: string
    href?: string
    children?: MenuItem[]
}

interface Props {
    items?: MenuItem[]
    position?: 'left' | 'right'
    width?: 'sm' | 'md' | 'lg' | 'collapsed'
    variant?: 'default' | 'bordered' | 'floating'
    title?: string
    defaultActive?: string
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    position: 'left',
    width: 'md',
    variant: 'default',
    title: 'Menu',
    defaultActive: ''
})

const emit = defineEmits<{
    select: [item: MenuItem]
}>()

const isCollapsed = computed(() => props.width === 'collapsed')
const expandedItems = ref<string[]>([])
const activeItem = ref<string>(props.defaultActive)

const widthClass = computed(() => {
    return { sm: 'w-48', md: 'w-56', lg: 'w-64', collapsed: 'w-16' }[props.width]
})

const variantClass = computed(() => ({
    default: 'bg-white border-slate-200',
    bordered: 'bg-white border-slate-300',
    floating: 'bg-white rounded-xl shadow-lg'
}[props.variant]))

const borderClass = computed(() => {
    if (props.variant === 'floating') return ''
    return props.position === 'left' ? 'border-r' : 'border-l'
})

const toggleExpand = (label: string) => {
    if (expandedItems.value.includes(label)) {
        expandedItems.value = expandedItems.value.filter(item => item !== label)
    } else {
        expandedItems.value.push(label)
    }
}

const selectItem = (item: MenuItem) => {
    activeItem.value = item.label
    emit('select', item)
}

defineExpose({ isCollapsed, activeItem, expandedItems })
</script>

<template>
    <aside :class="[
        'flex flex-col transition-all duration-300',
        widthClass,
        variantClass,
        borderClass
    ]">
        <!-- Header -->
        <div class="flex items-center justify-between p-3 border-b border-slate-100">
            <span v-if="!isCollapsed" class="font-semibold text-slate-900 text-sm">{{ title }}</span>
            <svg v-if="isCollapsed" class="w-4 h-4 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="position === 'left'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5l7 7-7 7" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 19l-7-7 7-7" />
            </svg>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-2 space-y-1">
            <template v-for="item in items" :key="item.label">
                <!-- Simple Item -->
                <a v-if="!item.children" 
                    href="#" 
                    :class="[
                        'flex items-center rounded-lg text-sm transition-colors',
                        isCollapsed ? 'justify-center p-2' : 'px-3 py-2',
                        activeItem === item.label
                            ? 'bg-slate-900 text-white font-medium'
                            : 'text-slate-600 hover:bg-slate-100'
                    ]"
                    :title="isCollapsed ? item.label : undefined"
                    @click.prevent="selectItem(item)">
                    <span v-if="isCollapsed">{{ item.label.charAt(0) }}</span>
                    <span v-else>{{ item.label }}</span>
                </a>

                <!-- Expandable Item -->
                <div v-else>
                    <button 
                        @click="toggleExpand(item.label)" 
                        :class="[
                            'w-full flex items-center rounded-lg text-sm transition-colors',
                            isCollapsed ? 'justify-center p-2' : 'justify-between px-3 py-2',
                            expandedItems.includes(item.label)
                                ? 'bg-slate-100 text-slate-800'
                                : 'text-slate-600 hover:bg-slate-100'
                        ]"
                        :title="isCollapsed ? item.label : undefined">
                        <span v-if="isCollapsed">{{ item.label.charAt(0) }}</span>
                        <span v-else>{{ item.label }}</span>
                        <svg v-if="!isCollapsed" 
                            :class="['w-4 h-4 transition-transform', expandedItems.includes(item.label) && 'rotate-180']"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <!-- Children -->
                    <div v-if="expandedItems.includes(item.label) && !isCollapsed" class="ml-3 mt-1 space-y-1">
                        <a v-for="child in item.children" 
                            :key="child.label" 
                            href="#" 
                            :class="[
                                'block px-3 py-1.5 rounded-lg text-sm',
                                activeItem === child.label
                                    ? 'bg-slate-900 text-white font-medium'
                                    : 'text-slate-500 hover:bg-slate-100'
                            ]"
                            @click.prevent="selectItem(child)">
                            {{ child.label }}
                        </a>
                    </div>
                </div>
            </template>
            
            <!-- Default Slot for custom content -->
            <slot :collapsed="isCollapsed" />
        </nav>

        <!-- Footer Slot -->
        <div v-if="$slots.footer" class="p-3 border-t border-slate-100">
            <slot name="footer" :collapsed="isCollapsed" />
        </div>
    </aside>
</template>
