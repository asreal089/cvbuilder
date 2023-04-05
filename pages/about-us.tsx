import { Container } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

const aboutUs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV Builder</title>
        <meta
          name="description"
          content="a place where you can store your cv"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Navbar />
        <h1>About CvBuild</h1>
        <p>
          Welcome to CvBuild, a platform designed to help job seekers showcase
          their skills and experience through beautifully designed CVs. Our
          mission is to make it easy for anyone to create a professional-looking
          CV that highlights their strengths and accomplishments.
        </p>
        <h2>Our Mission</h2>
        <p>
          At CvBuild, we believe that everyone deserves a chance to pursue their
          dream career. That&apos;s why we&apos;ve created a platform that&apos;s accessible to
          anyone, regardless of their background or experience level. Our goal
          is to help job seekers stand out from the competition by providing
          them with the tools they need to create a standout CV.
        </p>
        <p>
          We understand that crafting the perfect CV can be a daunting task,
          especially when faced with the pressure of making a great first
          impression. By offering an intuitive and user-friendly interface,
          CvBuild simplifies this process, making it easy for users to create a
          professional and eye-catching CV that showcases their unique skills
          and talents.
        </p>
        <p>
          Our commitment to our users extends beyond just providing the tools to
          build a CV. We are constantly researching and staying up-to-date with
          industry trends, employer preferences, and best practices to ensure
          that the guidance we offer is both relevant and effective. By doing
          so, we empower our users to present themselves in the best possible
          light, increasing their chances of landing their dream job.
        </p>
        <p>
          At the heart of our mission is the desire to make a real difference in
          people&apos;s lives. We are dedicated to helping job seekers overcome
          barriers and achieve their career aspirations, and we will continue to
          innovate and improve our platform to better serve the needs of our
          diverse user base.
        </p>
      </Container>
    </div>
  );
};

export default aboutUs;
