import { LoaderContainer, LoaderSpinner } from './Loader.styled';

const Loader = () => {
  return (
    <>
      <LoaderContainer>
        <LoaderSpinner
          height="200"
          width="200"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </LoaderContainer>
    </>
  );
};

export default Loader;
