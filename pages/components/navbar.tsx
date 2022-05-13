import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Toolbar, IconButton, Typography, Button, Link, Menu, Box } from '@material-ui/core'
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () =>{
    const session: any = useSession();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  edge="start" aria-label="menu">
                        <Link href='/'>
                            <HomeIcon className="white"/>
                        </Link>
                    </IconButton>
                    <ul className="menu">
                        <li>

                            <Link href='/sobre' className="white">
                                <Typography variant="h6">
                                    Sobre
                                </Typography>
                            </Link>
                        </li>


                        <li>
                            <Link href='/builder' className="white">
                                <Typography variant="h6">
                                    Seu CV
                                </Typography>
                            </Link>

                        </li>
                       
                    </ul>
                        <div className="right">

                        {!session.data && (
                            <>
                            <Button className="white right"
                                onClick={() =>
                                signIn("google", { callbackUrl: "http://localhost:3000/" })
                                }
                            >
                                Sing In
                                
                                <LoginIcon className="white"/>
                            </Button>
                            </>
                        )}

                        {session.data && (
                            <>
                            <Button className="white right" onClick={() => signOut()}>
                                Sign out
                                <LogoutIcon className="white"/>
                            </Button>
                            </>
                        )}
                        </div>
                    
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;