import HomeIllustration from '../../assets/home-illustration.svg';
import { StyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';

import {
     HomeWrapper,
     HomeContainer,
     StyledTitle,
     Illustration,
} from './homeStyle';

const LeftCol = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     flex: 1;
     ${StyledLink} {
          maw-width: 250px;
     }
`;
function Home() {
     return (
          <HomeWrapper>
               <HomeContainer>
                    <LeftCol>
                         <StyledTitle>
                              Repérez vos besoins, on s’occupe du reste, avec
                              les meilleurs talents
                         </StyledTitle>
                         <StyledLink to="/survey/1" $isFullLink>
                              Faire le test
                         </StyledLink>
                    </LeftCol>
                    <Illustration src={HomeIllustration} />
               </HomeContainer>
          </HomeWrapper>
     );
}

export default Home;
