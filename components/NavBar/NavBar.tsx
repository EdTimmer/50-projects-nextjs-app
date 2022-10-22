import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavBarContainer, NavLinkButton, Title, ButtonLabel } from './NavBar.css';

const NavBar = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const pathname = router.pathname
  const titleString = pathname.replace("-", " ").replace('/', '')
  const title = pathname === '/' ? '50 Projects' : titleString

  return (
    <NavBarContainer>
      <Title>{title}</Title>
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
