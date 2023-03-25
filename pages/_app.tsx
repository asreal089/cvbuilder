import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';

interface AppPropsWithSession extends AppProps {
  pageProps: {
    session?: Session;
  } & AppProps["pageProps"];
}

export default function App({ Component, pageProps }: AppPropsWithSession) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
