'use client'

import { useSyncExternalStore } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const subscribe = () => () => {}

export default function DeferredScrollReveal() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return null
  }

  return <ScrollReveal />
}
