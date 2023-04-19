import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const ProfileWrapper = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding: 90px 0;
     margin: 0 90px;
     background-color: ${({ theme }) =>
          theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

export const ProfileDetails = styled.div`
     display: flex;
     flex-direction: column;
     margin-left: 50px;
     color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

export const Picture = styled.img`
     height: 150px;
     width: 150px;
     border-radius: 75px;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`

export const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

export const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

export const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

export const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`
