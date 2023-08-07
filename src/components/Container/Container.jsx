import ContainerMedia from './Container.style';

const Container = ({ children }) => {
  return (
    <>
      <ContainerMedia>{children}</ContainerMedia>
    </>
  );
};

export default Container;
