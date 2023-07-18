import './globals.css'
import { Montserrat } from 'next/font/google'
import { ToastProvider } from '@/providers/toastProvider'
import { Analytics } from '@vercel/analytics/react';


const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Willian Pereira | Front-End',
  description: 'Desenvolvedor Software'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
         {children}
         <Analytics />
        </ToastProvider>
       
        </body>
    </html>
  )
}
