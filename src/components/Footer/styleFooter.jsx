import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const FooterContainer = styled.footer`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 60px 0;
`;

export const NightModeButton = styled.button`
     background-color: transparent;
     border: none;
     cursor: pointer;
     color: ${colors.secondary};
     padding-top: 30px;
`;
