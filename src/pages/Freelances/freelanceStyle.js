import styled from "styled-components";
import colors from "../../utils/style/colors";

export const CardsContainer = styled.div`
     display: grid;
     gap: 24px;
     grid-template-rows: 350px 350px;
     grid-template-columns: repeat(2, 1fr);
     align-items: center;
     justify-items: center;
`;

export const PageTitle = styled.h1`
     font-size: 30px;
     color: black;
     text-align: center;
     padding-bottom: 30px;
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const PageSubtitle = styled.h2`
     font-size: 25px;
     color: ${colors.secondary};
     font-wheight: 300;
     text-align: center;
     padding-bottom: 30px;
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const WrapperLoader = styled.div`
     display: flex;
     width: 100%;
     height: 100%;
     justify-content: center;
     align-items: center;
`;