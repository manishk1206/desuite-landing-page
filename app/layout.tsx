import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// --- UPDATE THIS SECTION ---
export const metadata: Metadata = {
  title: 'DeSuite | The Stablecoin & Tokenization Layer for Oracle ERP', // <--- UPDATED
  description: 'Seamlessly integrate stablecoin payments, tokenized assets, and blockchain rails directly into your Oracle Financials and SCM.',
  openGraph: {
    title: 'DeSuite | ERP Blockchain Rails',
    description: 'The secure bridge between Oracle ERP and Tokenized assets liquidity.',
    url: 'https://desuite.io',
    siteName: 'DeSuite',
    type: 'website',
  },
}
// ---------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}