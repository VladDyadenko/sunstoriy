import styled from 'styled-components';

const ContainerMedia = styled.div`
  background-color: transparent;

  margin: 0 auto;
  padding: 0 15px;
  width: var(--small-screen);

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export default ContainerMedia;
