import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { PrimeReactProvider } from 'primereact/api'
import { Poppins } from 'next/font/google'
// Components
import Sidebar from 'components/layouts/Sidebar'
import Navbar from 'components/layouts/Navbar'

// Theming
import 'assets/scss/main.scss'
import 'public/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['100', '200', '300', '400', '500', '600', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diamond Template',
  description: 'The ultimate template for React and Next JS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <PrimeReactProvider>
      <html
        lang='en'
        className='h-full'
      >
        <body className={`${poppins.className} h-full bg-slate-100`}>
          <main className='grid max-h-screen grid-cols-[min-content,1fr]'>
            {/* Sidebar */}
            <Sidebar />

            <div className='grid grid-rows-[min-content,calc(100vh-64px)]'>
              {/* Navbar */}
              <Navbar />

              {/* Content */}
              <div className='overflow-auto pb-5 pr-5'>
                <div className='min-h-[calc(100vh-84px)] rounded-2xl bg-white p-5'>{children}</div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </PrimeReactProvider>
  )
}
