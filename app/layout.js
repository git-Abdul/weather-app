import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather • Dev',
  description: 'A simple weather application in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://img.icons8.com/?size=256&id=RcBBZX2XlWJV&format=png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
