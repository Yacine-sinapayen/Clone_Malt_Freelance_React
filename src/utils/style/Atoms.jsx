import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align:center;
    ${(props) =>
        props.$isFullLink &&
        `color: white; 
        border-radius: 30px; background-color: ${colors.primary};`}
`
// c'est quoi le '$' ? : eh bien, cela permet de signaler à  styled-components  que notre prop nous sert pour le style, et qu'elle ne doit pas être passée dans le DOM. Ce  $  est uniquement nécessaire pour passer une prop si le composant en question est un composant React, comme ici pour  Link  (et non un élément HTML). Si mon styled component était basé sur une simple balise  a  , je pourrais totalement utiliser la prop  isFullLink  sans le  $. 

