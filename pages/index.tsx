import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core'
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {

  const session: any = useSession();

  return (
    <div>
      <Head>
        <title>CV BUILDER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Container>
      <Navbar />


      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to your CV builder.
        </h1>

        {!session.user && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          >
            Sign in
          </button>
        </>
      )}
      {session.user && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
        
      </main>

      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/nlt-logo.jpeg" alt="nlt" width={72} height={16} />
          </span>
      </footer>
    </Container>
    </div>
  )
}

export default Home;