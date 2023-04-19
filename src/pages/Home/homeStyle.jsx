import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const HomeWrapper = styled.div`
     display: flex;
     justify-content: center;
`;

export const HomeContainer = styled.div`
     margin: 30px;
     background-color: ${colors.background};
     padding: 60px 90px;
     display: flex;
     flex-direction: row;
     max-width: 1200px;
`;

export const StyledTitle = styled.h2`
     padding-bottom: 30px;
     max-width: 280px;
     line-height: 50px;
`;

export const Illustration = styled.img`
     flex: 1;
`;
