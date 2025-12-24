// Component Types for UI Kit

// Button - 12 yaratıcı varyant
export type ButtonVariant =
    | 'solid'      // Dolgulu
    | 'outline'    // Kenarlıklı
    | 'ghost'      // Saydam
    | 'soft'       // Yumuşak arka plan
    | 'link'       // Link stili
    | 'gradient'   // Gradient arka plan
    | 'glow'       // Parıldayan efekt
    | 'glass'      // Cam efekti
    | 'neu'        // Neumorphism
    | 'danger'     // Tehlike
    | 'success'    // Başarı
    | 'icon'       // Sadece ikon

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Input - 4 varyant
export type InputVariant = 'default' | 'filled' | 'underline' | 'ghost'

// Badge - 6 varyant  
export type BadgeVariant = 'solid' | 'outline' | 'soft' | 'dot' | 'gradient' | 'glass'

// Alert - 4 varyant
export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

// Avatar - 5 boyut
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Progress - 4 varyant
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error'

// Card - 4 varyant
export type CardVariant = 'default' | 'bordered' | 'elevated' | 'glass'

export interface BaseComponentProps {
    disabled?: boolean
}
