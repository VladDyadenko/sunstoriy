import { useLocation } from "react-router-dom";
import HeaderDayPicker from "../DayPicker/DayPicker";

import {
  IconChildren,
  LeftHeaderContainer,
  LeftHeaderItem,
  LeftHeaderLink,
  LeftHeaderNavWrapper,
  LeftHeadreNav,
} from "./LeftHeader.styled";

function LeftHeader() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <LeftHeaderContainer>
      <HeaderDayPicker />
      <LeftHeaderNavWrapper>
        <LeftHeadreNav>
          <LeftHeaderItem>
            <LeftHeaderLink
              active={currentPath === "/children" ? "active" : ""}
              to={"/children"}
            >
              <IconChildren />
              Діти
            </LeftHeaderLink>
          </LeftHeaderItem>
          <LeftHeaderItem>
            <LeftHeaderLink>Діагностика</LeftHeaderLink>
          </LeftHeaderItem>
          <LeftHeaderItem>
            <LeftHeaderLink>Читалка</LeftHeaderLink>
          </LeftHeaderItem>
          <LeftHeaderItem>
            <LeftHeaderLink
              active={currentPath === "/financial" ? "active" : ""}
              to={"/financial"}
            >
              Фінанси
            </LeftHeaderLink>
          </LeftHeaderItem>
        </LeftHeadreNav>
      </LeftHeaderNavWrapper>
    </LeftHeaderContainer>
  );
}

export default LeftHeader;
