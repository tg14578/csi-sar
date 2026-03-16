
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "CSI Search and Rescue System",
  description: "Machine Learning Optimized Search and Rescue System using Channel State Information"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{paddingTop:'70px'}}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
