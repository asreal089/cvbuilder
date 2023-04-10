import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const notFound: NextPage = () => {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1>500</h1>
        <p>
          It seems like the server is currently unable to fulfill your request,
          and as a result, you are seeing the 500 Internal Server Error page.
          This may be due to a temporary glitch or a more serious issue with the
          server.
        </p>
      </main>
    </div>
  );
};

export default notFound;
