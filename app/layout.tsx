import './globals.css'
import { Inter } from 'next/font/google'
import {ClerkProvider, RedirectToSignIn} from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Notes',
  description: 'Notes taking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

          <ClerkProvider>

              <html lang="en">

              <body className={inter.className}>
              {children}
              <Script
                  id={"Adsense-id"}
                  data-ad-client={"ca-pub-6536386312002560"}
                  async={true}
                  strategy={"beforeInteractive"}
                  src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}
              />
              </body>
              </html>
          </ClerkProvider>


  )
}
