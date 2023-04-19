import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import DefaultPicture from '../../assets/profile.png';
import { useState } from 'react';
import { useTheme } from '../../utils/Hook/Hooks';

const CardLabel = styled.span`
     color: #5843e4;
     font-size: 22px;
     font-weight: bold;
     padding-left: 15px;
`;

const CardTitle = styled.span`
     color:black;
     font-size: 22px;
     font-weight: normal;
     align-self: center;
`;

const CardImage = styled.img`
     height: 80px;
     width: 80px;
     border-radius: 50%;
     align-self: center;
`;

const CardWrapper = styled.div`
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

function Card({ label, title, picture }) {
     const { theme } = useTheme();
     const [isFavorite, setIsFavorite] = useState(false);
     const star = isFavorite ? '⭐️' : '';
     return (
          <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
               <CardLabel theme={theme}>{label}</CardLabel>
               <CardImage src={picture} alt="freelance" />
               <CardTitle data-testid='cardTitle' theme={theme}>{star}{title}{star}</CardTitle>
          </CardWrapper>
     );
}
Card.propTypes = {
     label: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
     picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
     label: '',
     title: '',
     picture: DefaultPicture,
};

export default Card;
