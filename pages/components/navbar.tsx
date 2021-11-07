import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Link } from '@material-ui/core'
import React from "react";

const Navbar = () =>{
    return (
        <div>
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
                            <Link href='/dicas' className="white">
                                <Typography variant="h6">
                                    Dicas
                                </Typography>
                            </Link>

                        </li>

                        <li>
                            <Link href='/builder' className="white">
                                <Typography variant="h6">
                                    Builder
                                </Typography>
                            </Link>

                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;