import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const SurveyContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const QuestionTitle = styled.h2`
     text-decoration: underline;
     text-decoration-color: ${colors.primary};
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const QuestionContent = styled.span`
     margin: 30px;
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const LinkWrapper = styled.div`
     padding-top: 30px;
     & a {
          color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
     }
     & a:first-of-type {
          margin-right: 20px;
     }
`;

export const ReplyBox = styled.button`
     border: none;
     height: 100px;
     width: 300px;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: ${({ theme }) =>
          theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
     color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
     border-radius: 30px;
     cursor: pointer;
     box-shadow: ${(props) =>
          props.isSelected
               ? `0px 0px 0px 2px ${colors.primary} inset`
               : 'none'};
     &:first-child {
          margin-right: 15px;
     }
     &:last-of-type {
          margin-left: 15px;
     }
`;

export const ReplyWrapper = styled.div`
     display: flex;
     flex-direction: row;
`;
export const SpanError = styled.span`
     margin: 15px;
`;
