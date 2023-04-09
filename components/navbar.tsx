import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const session: any = useSession();

  return (
    <AppBar position="fixed" className="center">
      <Toolbar className="toolBar">
        <div className="left">

          <IconButton edge="start" aria-label="menu">
            <Link href="/">
              <HomeIcon className="white" />
            </Link>
          </IconButton>
        
            <Link href="/about-us" className="whiteMenu">
              <Typography className="navText">About us</Typography>
            </Link>

          
            <Link href={"/cv"} className="whiteMenu">
              <Typography className="navText">CVs</Typography>
            </Link>
         

          {session.data && (
            <>
              
                <Link
                  href={"/build-cv/" + session.data.user.email}
                  className="whiteMenu"
                  >
                  <Typography className="navText">Build</Typography>
                </Link>
              
                <Link href={"/cv/" + session.data.user.email} className="whiteMenu">
                  <Typography className="navText">My cv</Typography>
                </Link>
              
            </>
          )}
        </div>
        <div className="right">
          {!session.data && (
            <>
              <Button
                className="whiteMenu"
                onClick={() =>
                  signIn("google", { callbackUrl: process.env.URL })
                }
              >
                <Typography className="navText">Sing In</Typography>
                <LoginIcon className="white" />
              </Button>
            </>
          )}

          {session.data && (
            <>
              <Button className="whiteMenu" onClick={() => signOut()}>
                <Typography className="navText">Sign out</Typography>
                <LogoutIcon className="white" />
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
