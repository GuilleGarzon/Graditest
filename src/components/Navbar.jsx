import { useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        className="header__logo"
        src="logoGradiweb.png"
        alt="Logo-Gradiweb"
        onClick={() => navigate('/')}
      />
      <CartIcon />
    </header>
  );
};

export default Navbar;
