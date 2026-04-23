'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.classList.contains('active')) {
          return
        }
        observer.observe(el)
      })
    }, 50)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [pathname, isClient])

  return null
}
