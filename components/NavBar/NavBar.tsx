import { NavBarContainer, NavLinkButton } from './NavBar.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link href="/">
        <NavLinkButton>Home</NavLinkButton>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
