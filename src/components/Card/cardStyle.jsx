import styled from "styled-components";
import colors from '../../utils/style/colors';

export const CardLabel = styled.span`
     color: #5843e4;
     font-size: 22px;
     font-weight: bold;
     padding-left: 15px;
`;

export const CardTitle = styled.span`
     color:black;
     font-size: 22px;
     font-weight: normal;
     align-self: center;
`;

export const CardImage = styled.img`
     height: 80px;
     width: 80px;
     border-radius: 50%;
     align-self: center;
`;

export const CardWrapper = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     padding: 15px;
     background-color: ${colors.backgroundLight};
     border-radius: 30px;
     height: 300px;
     width: 300px;
     transition: 200ms;
     &:hover {
          cursor: pointer;
          box-shadow: 2px 2px 10px #e2e3e9;
     }
`;