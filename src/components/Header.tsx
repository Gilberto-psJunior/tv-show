import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material'
import styled from "styled-components";
import { NavbarWrapper } from "../styles/Header.modules";


const menuItems =[
    

       {name:'HOME'},

     {name:'NOW PLAYING'},
     {name:'POPULAR'},
     {name:'TV SHOWS'}

    
 
]

const Header = () => {

    return (
        
        
         <NavbarWrapper>
            <AppBar sx={{padding:"5px"}}>

                <Toolbar>
                    <Typography>
                        Cinematica - 2
                    </Typography>
                    <div>
{menuItems.map((nav,index)=>(<Tab label={nav.name} key={index}/>))}

                    </div>
<Button variant="contained" color="info">Login</Button>
                </Toolbar>
            </AppBar>
        </NavbarWrapper>

        
        
        
    )
       



    

};

export default Header;