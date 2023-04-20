import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/style/Atoms';
import DarkLogo from '../../assets/dark-logo.png';
import { HomeLogo, NavContainer} from './headerStyle.jsx';


function Header() {
     return (
          <NavContainer>
               <Link>
                    <HomeLogo src={DarkLogo} />
               </Link>
               <div>
                    <StyledLink to="/"> Accueil </StyledLink>
                    {/* $isFullLink est une props définie plus haut qui permet de styliser un de mes liens  */}
                    <StyledLink to="/survey/1" $isFullLink>
                         Faire le test
                    </StyledLink>
                    <StyledLink to="/results"> résultats </StyledLink>
                    <StyledLink to="/freelances"> Freelances </StyledLink>
               </div>
          </NavContainer>
     );
}

export default Header;
