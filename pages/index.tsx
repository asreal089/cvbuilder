import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { Container } from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const session: any = useSession();

  return (
    <div>
      <Head>
        <title>CV Builder</title>
        <meta name="description" content="a place where you can store your cv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to CV Storage!</h1>

          <p className={styles.description}>
            Store and manage all your CVs in one place.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <Image
              
                src="/escudo.png"
                alt="Secure Storage"
                width={200}
                height={200}
              />
              <h3>Secure Storage</h3>
              <p>Your CVs are stored securely on our servers.</p>
            </div>

            <div className={styles.card}>
              <Image
                src="/acesso.png"
                alt="Easy Access"
                width={200}
                height={200}
              />
              <h3>Easy Access</h3>
              <p>You can easily access your CVs from anywhere, anytime.</p>
            </div>

            <div className={styles.card}>
              <Image
                src="/updated.png"
                alt="Update CV"
                width={200}
                height={200}
              />
              <h3>Update Your CVs</h3>
              <p>You can easily update your CVs and keep them up-to-date.</p>
            </div>

            <div className={styles.card}>
              <Image
                src="/share.png"
                alt="Share CV"
                width={200}
                height={200}
              />
              <h3>Share Your CVs</h3>
              <p>You can easily share your CVs with potential employers.</p>
            </div>
          </div>
          <p className={styles.cta}>
            
          {!session.data && (
            <div>
              Join in Now
              <button
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000/" })
                }
              >
                Sign in
              </button>
            </div>
          )}
          {session.data && (
            <div>
              Signed in as {session.data.user.name}
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          )}
          </p>

          
        </main>

        <footer className={styles.footer}>
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/nltech.png" alt="nlt" width={100} height={20} />
          </span>
        </footer>
      </Container>
    </div>
  );
};

export default Home;
