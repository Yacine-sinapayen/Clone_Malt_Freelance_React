import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: #5843E4;`}
`
// c'est quoi le '$' ? : eh bien, cela permet de signaler à  styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM. Ce  $  est uniquement nécessaire pour passer une prop si le composant en question est un composant React, comme ici pour  Link  (et non un élément HTML). Si mon styled component était basé sur une simple balise  a  , je pourrais totalement utiliser la prop  isFullLink  sans le  $ 
 
function Header() {
     return (
          <nav>
               <StyledLink to="/"> Accueil </StyledLink>
               {/* $isFullLink est une props définis plud haut qui permet de styliser un de mes liens  */}
               <StyledLink to="/survey/1" $isFullLink>
                    {' '}
                    Faire le test{' '}
               </StyledLink>
               <StyledLink to="/results"> résultats </StyledLink>
               <StyledLink to="/freelances"> Freelances </StyledLink>
          </nav>
     );
}

export default Header;
