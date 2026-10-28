import { BtnNavStyl } from './BtnNav.styled';

const BtnNav = ({ to, children, className }) => {
  return (
    <BtnNavStyl to={to} className={className}>
      {children}
    </BtnNavStyl>
  );
};

export default BtnNav;
