
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "CSI Search and Rescue System",
  description: "Machine Learning Optimized Search and Rescue System using Channel State Information"
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main style={{minHeight: '100vh'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
