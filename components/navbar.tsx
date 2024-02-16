import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const session: any = useSession();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.menuLeft}>
          <div aria-label="menu">
            <Link href="/">
              <HomeIcon className={styles.linkIcon} />
            </Link>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/about-us" className={styles.link}>
              About us
            </Link>
          </div>
          <div className={styles.navbarItem}>
            <Link href={"/cv"} className={styles.link}>
              CVs
            </Link>
          </div>

          {session.data && (
            <>
              <div className={styles.navbarItem}>
                <Link
                  href={"/build-cv/" + session.data.user.email}
                  className={styles.link}
                >
                  Build
                </Link>
              </div>
              <div className={styles.navbarItem}>
                <Link
                  href={"/cv/" + session.data.user.email}
                  className={styles.link}
                >
                  My cv
                </Link>
              </div>
            </>
          )}
        </div>
        <div className={styles.menuRight}>
          {!session.data && (

              <div
                className={styles.link}
                onClick={() =>
                  signIn("google", { callbackUrl: process.env.URL })
                }
              >
                Sing In
                <LoginIcon className={styles.linkIcon} />
              </div>

          )}

          {session.data && (
            
              <div className={styles.link} onClick={() => signOut()}>
                Sign out
                <LogoutIcon className={styles.linkIcon} />
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
