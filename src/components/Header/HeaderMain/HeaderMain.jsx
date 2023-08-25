import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/images/Header/LogoSunstoriy.jpg';
import {
  HeaderLink,
  HeaderLinkDesctop,
  HeaderList,
  LogoLink,
  LogoLinkMobil,
  MainNavSite,
  NavItem,
  UserContainer,
} from './HeaderMain.styled';
import { navSitePage } from 'assets/constants/mainConstans';
import { AppBar } from '@mui/material';
import DrawerSite from '../Drawer/Drawer';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';

function HeaderMain() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { name, avatarUrl } = useSelector(selectAuthUser);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoLink to="/">
            <img src={logo} alt="Logo" width={100} />
          </LogoLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {navSitePage.map(({ page, path }) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <HeaderLink
                    active={currentPath === path ? 'active' : ''}
                    to={path}
                  >
                    {page}
                  </HeaderLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoLinkMobil to="/">
            <img src={logo} alt="Logo" width={100} />
          </LogoLinkMobil>
          <MainNavSite>
            <HeaderList>
              {navSitePage.map(({ page, path }) => (
                <NavItem key={path}>
                  <HeaderLinkDesctop
                    onClick={handleCloseNavMenu}
                    to={path}
                    active={currentPath === path ? 'active' : ''}
                  >
                    {page}
                  </HeaderLinkDesctop>
                </NavItem>
              ))}
            </HeaderList>
          </MainNavSite>

          <Box sx={{ flexGrow: 0 }}>
            <UserContainer>
              <Avatar alt="User foto" src={avatarUrl} />
              <DrawerSite userName={name} />
            </UserContainer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderMain;
