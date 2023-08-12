import styled from 'styled-components';

const ContainerMedia = styled.div`
  background-color: transparent;

  margin: 0 auto;
  width: var(--small-screen);

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export default ContainerMedia;
