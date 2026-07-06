'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    )
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(next)
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
    >
      {theme === null ? null : theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
