'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const navItems = header?.navItems || []

  return (
    <header className='w-full text-black bg-white sticky top-0 z-50'>
      <nav className='flex flex-row gap-4 items-center justify-between max-w-6xl mx-auto p-3'>
        <Link href="/" className='font-semibold text-4xl'>FutureAboard</Link>
        <ul className='flex flex-row gap-4'>
          {
            navItems.map(({ link }, i) => {
              return <Link key={`link-${i}`} href={'#'} className='font-medium text-md'>{link.label}</Link>
            })
          }
          {/* <li><Link href="#" className='font-medium text-md'>Home</Link></li>
          <li><Link href="#" className='font-medium text-md'>Services</Link></li>
          <li><Link href="#" className='font-medium text-md'>Countries</Link></li>
          <li><Link href="#" className='font-medium text-md'>Contact Us</Link></li> */}
        </ul>
        <div className='flex flex-row gap-4'>
          <Link href="#" className='font-medium text-md'><i className="ri-login-box-line"></i>Log In</Link>
          <Link href="#" className='font-medium text-md'><i className="ri-user-3-line"></i>Sign Up</Link>
        </div>
      </nav>
    </header>
  )

  // return (
  //   <header
  //     className="container relative z-20 py-8 flex justify-between"
  //     {...(theme ? { 'data-theme': theme } : {})}
  //   >
  //     <Link href="/">
  //       <Logo />
  //     </Link>
  //     <HeaderNav header={header} />
  //   </header>
  // )
}
