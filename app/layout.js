import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import Nav from "../components/Nav"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task 4 Crypto',
  description: 'Task4Crypto',
}
const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav/>{children}</body>
    </html>
  )
}
