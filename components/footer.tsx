import styles from "../styles/Home.module.css";
import Image from "next/image";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} CvBuild. All rights reserved.</p>
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/nltech.png" alt="nlt" width={100} height={20} />
      </span>
    </footer>
  );
}

export default Footer;
