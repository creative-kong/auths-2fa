'use client'

import { ReduxProvider } from '@/components/providers/redux-provider'

export default function ProvidersLayout ({ children } : Readonly<{ children : React.ReactNode }>) {
    return (
        <ReduxProvider>
            {children}
        </ReduxProvider>
    )
}