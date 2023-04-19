import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import { useState } from 'react';
import { useTheme } from '../../utils/Hook/Hooks';
import { CardLabel, CardTitle, CardImage, CardWrapper } from './cardStyle.jsx';

function Card({ label, title, picture }) {
     const { theme } = useTheme();
     const [isFavorite, setIsFavorite] = useState(false);
     const star = isFavorite ? '⭐️' : '';
     return (
          <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
               <CardLabel theme={theme}>{label}</CardLabel>
               <CardImage src={picture} alt="freelance" />
               <CardTitle data-testid="cardTitle" theme={theme}>
                    {star}
                    {title}
                    {star}
               </CardTitle>
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
