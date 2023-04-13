import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/colors';

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

export const Loader = styled.div`
     padding: 10px;
     border: 6px solid ${colors.primary};
     border-bottom-color: transparent;
     border-radius: 22px;
     animation: ${rotate} 1s infinite linear;
     height: 0;
     width: 0;
`;

export const StyledLink = styled(Link)`
     padding: 15px;
     color: #8186a0;
     text-decoration: none;
     font-size: 18px;
     text-align: center;
     ${(props) =>
          props.$isFullLink &&
          `color: white; 
        border-radius: 30px; background-color: ${colors.primary};`}
`;
// c'est quoi le '$' ? : eh bien, cela permet de signaler à  styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM. Ce  $  est uniquement nécessaire pour passer une prop si le composant en question est un composant React, comme ici pour  Link  (et non un élément HTML). Si mon styled component était basé sur une simple balise  a  , je pourrais totalement utiliser la prop  isFullLink  sans le  $.
