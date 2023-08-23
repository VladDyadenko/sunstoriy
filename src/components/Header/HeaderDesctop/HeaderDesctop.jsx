import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/Header/LogoSunstoriy.jpg';
import {
  HeaderContainer,
  HeaderLink,
  HeaderList,
  HeaderSection,
  NavItem,
  UserContainer,
} from './HeaderDesctop.styled';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'redux/auth/authSelector';
import DrawerSite from 'components/Header/Drawer/Drawer';

const HeaderDesctop = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { name, avatarUrl } = useSelector(selectAuthUser);

  return (
    <>
      <HeaderContainer>
        <HeaderSection>
          <Link to="/">
            <img src={logo} alt="Logo" width={140} />
          </Link>
          <nav>
            <HeaderList>
              <NavItem>
                <HeaderLink
                  active={currentPath === '/main' ? 'active' : ''}
                  to={'/main'}
                >
                  Головна
                </HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink
                  active={currentPath === '/sensornaya' ? 'active' : ''}
                  to={'/sensornaya'}
                >
                  Сенсорна
                </HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink
                  active={currentPath === '/logoped' ? 'active' : ''}
                  to={'/logoped'}
                >
                  Логопед
                </HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink
                  active={currentPath === '/correction' ? 'active' : ''}
                  to={'/correction'}
                >
                  Корекційний
                </HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink
                  active={currentPath === '/children' ? 'active' : ''}
                  to={'/children'}
                >
                  Діти
                </HeaderLink>
              </NavItem>
            </HeaderList>
          </nav>
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
