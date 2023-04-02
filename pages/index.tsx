import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { Container } from "@material-ui/core";
import { useSession } from "next-auth/react";
import Footer from "../components/footer";

const Home: NextPage = () => {
  const session: any = useSession();

  return (
    <div>
      <Head>
        <title>CV Build</title>
        <meta
          name="description"
          content="a place where you can store your cv. Browse our collection of CVs from professionals in various industries."
        />
        <meta name="description" content="" />
        <meta name="keywords" content="CV, resume, job, career, professionals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to CV Build!</h1>

          <p className={styles.description}>
            Build, store, manage and display your CV in one place.
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
              <Image src="/share.png" alt="Share CV" width={200} height={200} />
              <h3>Share Your CVs</h3>
              <p>You can easily share your CVs with potential employers.</p>
            </div>
            <p>Get started today – sign in to create and share your standout CV!</p>
          </div>
        </main>

        <Footer />
      </Container>
    </div>
  );
};

export default Home;
