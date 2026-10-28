import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/images/Header/logoRightHeight.png';
import { HeaderLink, LogoLink, UserContainer } from './HeaderMain.styled';
import { navSitePage } from 'assets/constants/mainConstans';
import { AppBar, Typography } from '@mui/material';
import DrawerSite from '../Drawer/Drawer';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';

function HeaderMain() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const user = useSelector(selectAuthUser);

  const { name, avatarUrl } = user;
  const isAdmin = user && user.role === 'admin';

  const location = useLocation();
  const currentPath = location.pathname;

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          'linear-gradient(to bottom, hsl(198, 86%, 70%), hsl(120, 43%, 57%), hsl(100, 50%, 50%))',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoLink to="/">
            <img src={logo} alt="Logo" width={100} height={42} />
          </LogoLink>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <MenuIcon
              sx={{
                width: '2.5rem',
                height: '2.5rem',
                marginRight: '8px',
              }}
            />
            <Typography>
              {navSitePage.find(item => item.path === currentPath)?.page}
            </Typography>
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {navSitePage.map(
              ({ page, path }) =>
                (page !== 'Кабінет' || isAdmin) && (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <HeaderLink
                      active={currentPath === path ? 'active' : ''}
                      to={path}
                    >
                      {page}
                    </HeaderLink>
                  </MenuItem>
                )
            )}
          </Menu>

          <UserContainer>
            <Avatar alt="User foto" src={avatarUrl} />
            <DrawerSite userName={name} />
          </UserContainer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderMain;
