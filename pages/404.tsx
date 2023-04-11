import { NextPage } from "next";
import styles from "../styles/Error.module.css";

const notFound: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>404</h1>
        <p>
          It seems like the page you are trying to access is not found, and you
          are seeing a 404 Page Not Found error. This resource was not found,
          that could be due to a variety of reasons, such as the page being
          removed, renamed, or never existed in the first place.
        </p>
      </main>
    </div>
  );
};

export default notFound;
