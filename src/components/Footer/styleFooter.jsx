import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FooterContainer = styled.footer`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
     padding-top: 60px;
`;

export const NightModeButton = styled.button`
     background-color: transparent;
     border: none;
     cursor: pointer;
     color: ${colors.secondary};
`;