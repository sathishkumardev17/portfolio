import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getYearsOfExperienceNumber } from '@/utils/experience'

const inter = Inter({ subsets: ['latin'] })

const yearsExp = getYearsOfExperienceNumber();

export const metadata: Metadata = {
  title: 'Sathish Kumar M - Senior Front-End Developer Portfolio',
  description: `Senior Front-End Developer with ${yearsExp}+ years of experience building high-performance web applications. Specialized in React, TypeScript, GenAI integration, and enterprise-scale development.`,
  keywords: ['Front-End Developer', 'React Developer', 'TypeScript', 'GenAI', 'LLM Integration', 'Web Development', 'UI Automation', 'Walmart', 'Adobe', 'Portfolio'],
  authors: [{ name: 'Sathish Kumar M' }],
  openGraph: {
    title: 'Sathish Kumar M - Senior Front-End Developer',
    description: `Front-End Developer with ${yearsExp}+ years experience in React, TypeScript, and GenAI`,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-200 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

