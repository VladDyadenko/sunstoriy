import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/Header/LogoSunstoriy.jpg';
import {
  HeaderContainer,
  HeaderLink,
  HeaderList,
  HeaderSection,
  MainNavSite,
  NavItem,
  UserContainer,
} from './HeaderDesctop.styled';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';
import DrawerSite from 'components/Header/Drawer/Drawer';
import { navSitePage } from 'assets/constants/mainConstans';

const HeaderDesctop = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { name, avatarUrl } = useSelector(selectAuthUser);
  console.log(currentPath);
  return (
    <>
      <HeaderContainer>
        <HeaderSection>
          <Link to="/">
            <img src={logo} alt="Logo" width={140} />
          </Link>
          <MainNavSite>
            <HeaderList>
              {navSitePage.map(({ page, path }) => {
                return (
                  <NavItem key={path}>
                    <HeaderLink
                      active={currentPath === path ? 'active' : ''}
                      to={path}
                    >
                      {page}
                    </HeaderLink>
                  </NavItem>
                );
              })}
            </HeaderList>
          </MainNavSite>
          <UserContainer>
            <Avatar alt="User foto" src={avatarUrl} />
            <DrawerSite userName={name} />
          </UserContainer>
        </HeaderSection>
      </HeaderContainer>
    </>
  );
};

export default HeaderDesctop;
