import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const session: any = useSession();

  return (
    <AppBar position="fixed" className="center">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <Link href="/">
            <HomeIcon className="white" />
          </Link>
        </IconButton>
        <ul className="menu">
          <li>
            <Link href="/about-us" className="white">
              <Typography>ABOUT US</Typography>
            </Link>
          </li>

          <li>
            <Link href={"/cv"} className="white">
              <Typography>CVs</Typography>
            </Link>
          </li>

          {session.data && (
            <>
              <li>
                <Link
                  href={"/build-cv/" + session.data.user.email}
                  className="white"
                >
                  <Typography>BUILD</Typography>
                </Link>
              </li>
              <li>
                <Link href={"/cv/" + session.data.user.email} className="white">
                  <Typography>MY CV</Typography>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="right">
          {!session.data && (
            <>
              <Button
                className="white right"
                onClick={() =>
                  signIn("google", { callbackUrl: process.env.URL })
                }
              >
                <Typography>Sing In</Typography>
                <LoginIcon className="white" />
              </Button>
            </>
          )}

          {session.data && (
            <>
              <Button className="white right" onClick={() => signOut()}>
                <Typography>Sign out</Typography>
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
