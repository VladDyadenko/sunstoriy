import styled from 'styled-components';

const ContainerMedia = styled.div`
  background-color: transparent;

  margin: 0 auto;
  width: var(--small-screen);

  @media (min-width: 768px) {
    width: 468px;
  }

  @media (min-width: 1440px) {
    width: 1140px;
  }
`;

export default ContainerMedia;
