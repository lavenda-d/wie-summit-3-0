import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wie-summit-3-0.vercel.app'),
  title: 'WIE Summit 3.0 | ESA Women in Engineering | Kenyatta University',
  description: 'Join WIE Summit 3.0, Kenya\'s premier Women in Engineering conference hosted by ESA-WIE Kenyatta University. Connect with industry leaders, innovators, students, and partners shaping a just, green, and digital future.',
  keywords: [
    'WIE Summit 3.0',
    'Women in Engineering Summit Kenya',
    'ESA WIE Kenyatta University',
    'Engineering Students Association',
    'Women in STEM Kenya',
    'Engineering Conference Kenya',
    'Girls in STEM',
    'Innovation Summit',
    'Kenyatta University Engineering'
  ],
  icons: {
    icon: [
      {
        url: '/images/logo.jpg',
      },
    ],
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'WIE Summit 3.0 | ESA Women in Engineering | Kenyatta University',
    description: 'Join WIE Summit 3.0, Kenya\'s premier Women in Engineering conference hosted by ESA-WIE Kenyatta University. Connect with industry leaders, innovators, students, and partners shaping a just, green, and digital future.',
    url: 'https://wiesummit.com',
    type: 'website',
    images: [
      {
        url: '/images/homepage_preview.png',
        width: 1024,
        height: 486,
        alt: 'WIE Summit 3.0 Home Preview',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001f4d' },
    { media: '(prefers-color-scheme: dark)', color: '#080c14' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('wie-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


