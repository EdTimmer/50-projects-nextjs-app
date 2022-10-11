import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavBarContainer, NavLinkButton, Title, ButtonLabel } from './NavBar.css';

const NavBar = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <NavBarContainer>
      <Title>50 Projects</Title>
      {!isHomePage && (
        <Link href="/">
          <NavLinkButton>
            <ButtonLabel>Home</ButtonLabel>
          </NavLinkButton>
        </Link>
      )}
    </NavBarContainer>
  );
};

export default NavBar
