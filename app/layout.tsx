import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mi Primera App en Vercel - ¡Funcionando!",
  description: "Una aplicación web moderna creada con Next.js y desplegada en Vercel",
  keywords: ["Next.js", "React", "Vercel", "Web App"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
