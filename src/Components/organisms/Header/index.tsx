/* eslint-disable @typescript-eslint/no-unused-vars */

import Logo from '../../molecules/Logo';
import Icon from '../../atoms/Icons';
import {Box,  Menu, MenuItem, Container} from '@mui/material';
import {Search} from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '../../atoms/Button';
import {useState,} from 'react';
import {NavLink} from 'react-router-dom';
import AvatarComp from '../../atoms/Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAuth0 } from "@auth0/auth0-react";

const HeaderComponent = (props : any) => {
    const {loginWithRedirect,isAuthenticated,logout} = useAuth0();

    
   

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

   
    return (
        <AppBar data-testid='box' position="fixed" sx={{color: 'black', backgroundColor: 'white', boxShadow: 'none', display:'flex',justifyContent:'start'}}>
            <Container>
                <Toolbar sx={{height: '86px',  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <Logo {...props} />
                </NavLink>
                    {
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button size='large' key={0} startIcon={<Search fontSize='large' style={{textDecoration: 'none', fontSize: '30px'}}/>} sx={{color:'#03314B', margin: '0px 5px 0px 40px'}}/>

                            <Button data-testid='handle-explore' onClick={props.handleExploreMenu}  size='medium' key={1} sx={{display: 'flex', alignItems: 'center', color:'#03314B', margin: '5px 10px' ,fontSize:'16px',fontWeight:'500'}} children='Explore' endIcon={!props.exploreOption ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} />
                           
                            <NavLink to='/' style={{ textDecoration: 'none', }}>
                                <Button size='medium' key={2} children='My Library' sx={{color:'#03314B', margin: '5px 10px' ,fontSize:'16px',fontWeight:'500'}}/>
                            </NavLink>
                        </Box>
                    }
                    <Box sx={{ flexGrow: 0.5,}}>
                       
                        <div style={{alignItems: 'center',display:'flex'}}>
                        <Button onClick={handleOpenUserMenu}>
                       {!isAuthenticated? <AvatarComp/>:<AvatarComp name={"S"}/>}
                         </Button>
                        <Icon icon={<KeyboardArrowDownIcon />}/>
                        </div>
                        
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                         { !isAuthenticated  
                         ?
                         <MenuItem onClick={handleCloseNavMenu} >
                        <Button sx={{color:"black"}} onClick={() => {return (loginWithRedirect())}}> Login</Button>
                        </MenuItem> 
                        :
                        <MenuItem onClick={handleCloseNavMenu} >
                        <Button sx={{color:"black"}} onClick={() => logout({ returnTo: window.location.origin })}> Log Out</Button>
                        </MenuItem>  
}  
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default HeaderComponent;