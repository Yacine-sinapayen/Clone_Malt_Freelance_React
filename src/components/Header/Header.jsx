import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms';
import DarkLogo from '../../assets/dark-logo.png';

const HomeLogo = styled.img`
     height: 70px;
`;

const NavContainer = styled.nav`
     padding: 30px;
     display: flex;
     justify-content: space-between;
     align-items: center;
`;

function Header() {
     return (
          <NavContainer>
               <Link>
                    <HomeLogo src={DarkLogo} />
               </Link>
               <div>
                    <StyledLink to="/"> Accueil </StyledLink>
                    {/* $isFullLink est une props définis plud haut qui permet de styliser un de mes liens  */}
                    <StyledLink to="/survey/1" $isFullLink>
                         {' '}
                         Faire le test{' '}
                    </StyledLink>
                    <StyledLink to="/results"> résultats </StyledLink>
                    <StyledLink to="/freelances"> Freelances </StyledLink>
               </div>
          </NavContainer>
     );
}

export default Header;
