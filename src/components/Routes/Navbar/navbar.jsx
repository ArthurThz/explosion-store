import './navbar.styles.scss';

import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import ExplosionLogo from '../../../assets/explosion.svg';
import { UserContext } from '../../../Context/users.context';
import { signOutUser } from '../../../utils/Firebase/firebase.util';
function NavBar() {
  const { CurrentUser } = useContext(UserContext);

  // console.log(CurrentUser);
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <img src={ExplosionLogo} alt="app logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {CurrentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
