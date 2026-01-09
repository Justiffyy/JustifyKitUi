<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'

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

const slots = useSlots()

const isCollapsed = computed(() => props.width === 'collapsed')
const expandedItems = ref<string[]>([])
const activeItem = ref<string>(props.defaultActive)

const widthClass = computed(() => {
    const widths: Record<string, string> = { 
        sm: 'w-48', 
        md: 'w-56', 
        lg: 'w-64', 
        collapsed: 'w-16' 
    }
    return widths[props.width] || 'w-56'
})

const variantClass = computed(() => {
    const variants: Record<string, string> = {
        default: 'bg-white border-slate-200',
        bordered: 'bg-white border-slate-300',
        floating: 'bg-white rounded-xl shadow-lg'
    }
    return variants[props.variant] || variants.default
})

const borderClass = computed(() => {
    if (props.variant === 'floating') return ''
    return props.position === 'right' ? 'border-l' : 'border-r'
})

const orderClass = computed(() => {
    return props.position === 'right' ? 'order-last' : 'order-first'
})

const toggleExpand = (label: string) => {
    const index = expandedItems.value.indexOf(label)
    if (index > -1) {
        expandedItems.value.splice(index, 1)
    } else {
        expandedItems.value.push(label)
    }
}

const selectItem = (item: MenuItem) => {
    activeItem.value = item.label
    emit('select', item)
}

const hasFooterSlot = computed(() => !!slots.footer)

defineExpose({ isCollapsed, activeItem, expandedItems })
</script>

<template>
    <aside :class="[
        'flex flex-col flex-shrink-0 transition-all duration-300',
        widthClass,
        variantClass,
        borderClass,
        orderClass
    ]">
        <!-- Header -->
        <div class="flex items-center p-3 border-b border-slate-100" :class="isCollapsed ? 'justify-center' : 'justify-between'">
            <span v-if="!isCollapsed" class="font-semibold text-slate-900 text-sm">{{ title }}</span>
            <svg v-else class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="position === 'right' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
            </svg>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-2 space-y-1">
            <template v-for="item in items" :key="item.label">
                <!-- Simple Item (no children) -->
                <a 
                    v-if="!item.children" 
                    href="#" 
                    :class="[
                        'flex items-center rounded-lg text-sm transition-colors',
                        isCollapsed ? 'justify-center p-2' : 'px-3 py-2',
                        activeItem === item.label
                            ? 'bg-slate-900 text-white font-medium'
                            : 'text-slate-600 hover:bg-slate-100'
                    ]"
                    :title="isCollapsed ? item.label : undefined"
                    @click.prevent="selectItem(item)"
                >
                    <span v-if="isCollapsed">{{ item.label.charAt(0) }}</span>
                    <span v-else>{{ item.label }}</span>
                </a>

                <!-- Expandable Item (has children) -->
                <div v-else>
                    <button 
                        type="button"
                        :class="[
                            'w-full flex items-center rounded-lg text-sm transition-colors',
                            isCollapsed ? 'justify-center p-2' : 'justify-between px-3 py-2',
                            expandedItems.includes(item.label)
                                ? 'bg-slate-100 text-slate-800'
                                : 'text-slate-600 hover:bg-slate-100'
                        ]"
                        :title="isCollapsed ? item.label : undefined"
                        @click="toggleExpand(item.label)"
                    >
                        <span v-if="isCollapsed">{{ item.label.charAt(0) }}</span>
                        <span v-else>{{ item.label }}</span>
                        <svg 
                            v-if="!isCollapsed" 
                            class="w-4 h-4 transition-transform"
                            :class="{ 'rotate-180': expandedItems.includes(item.label) }"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    <!-- Children Items -->
                    <div 
                        v-if="expandedItems.includes(item.label) && !isCollapsed" 
                        class="ml-3 mt-1 space-y-1"
                    >
                        <a 
                            v-for="child in item.children" 
                            :key="child.label" 
                            href="#" 
                            :class="[
                                'block px-3 py-1.5 rounded-lg text-sm',
                                activeItem === child.label
                                    ? 'bg-slate-900 text-white font-medium'
                                    : 'text-slate-500 hover:bg-slate-100'
                            ]"
                            @click.prevent="selectItem(child)"
                        >
                            {{ child.label }}
                        </a>
                    </div>
                </div>
            </template>
            
            <!-- Default Slot -->
            <slot :collapsed="isCollapsed" />
        </nav>

        <!-- Footer Slot -->
        <div v-if="hasFooterSlot" class="p-3 border-t border-slate-100">
            <slot name="footer" :collapsed="isCollapsed" />
        </div>
    </aside>
</template>
