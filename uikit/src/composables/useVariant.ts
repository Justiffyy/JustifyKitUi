import { computed, type ComputedRef } from 'vue'

type VariantMap = Record<string, string>
type SizeMap = Record<string, string>

interface UseVariantOptions<V extends string, S extends string> {
    variant: V
    size?: S
    variantClasses: VariantMap
    sizeClasses?: SizeMap
    baseClasses?: string
    disabled?: boolean
    disabledClasses?: string
}

export function useVariant<V extends string, S extends string>(
    options: UseVariantOptions<V, S>
): ComputedRef<string> {
    return computed(() => {
        const classes: string[] = []

        if (options.baseClasses) {
            classes.push(options.baseClasses)
        }

        const variantClass = options.variantClasses[options.variant]
        if (variantClass) {
            classes.push(variantClass)
        }

        if (options.size && options.sizeClasses) {
            const sizeClass = options.sizeClasses[options.size]
            if (sizeClass) {
                classes.push(sizeClass)
            }
        }

        if (options.disabled && options.disabledClasses) {
            classes.push(options.disabledClasses)
        }

        return classes.join(' ')
    })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
}
