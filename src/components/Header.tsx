import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material'
import styled from "styled-components";
import { NavbarWrapper } from "../styles/Styles.modules";


const menuItems = [


    { name: 'HOME' },

    { name: 'NOW PLAYING' },
    { name: 'POPULAR' },
    { name: 'TV SHOWS' }



]

const Header = () => {

    return (


        <NavbarWrapper>
            <AppBar sx={{ padding: "10px",backgroundColor:"#063970" }}>

                <Toolbar>
                    <Typography className="logo">
                       BITFLIX
                    </Typography>
                    <div className="navLinks">
                        {menuItems.map((nav, index) => (<Tab className="links" label={nav.name} key={index} />))}

                    </div>
                    <Button className="loginBtn" variant="contained" color="info">Login</Button>
                </Toolbar>
            </AppBar>
        </NavbarWrapper>




    )






};

export default Header;