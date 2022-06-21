import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
