import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import { useState } from 'react';
import { useTheme } from '../../utils/Hook/Hooks';
import { CardLabel, CardTitle, CardImage, CardWrapper } from './cardStyle.jsx';

// ancienne logique avec les composants classe
// import { Component } from 'react';

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

// ancienne logique avec les composants classe
// class Card extends Component {

//      // Le constructor me permet d'accéder à mes props
//      constructor(props){
//           super(props)
//           this.state={}
//      }

//      render() {
//           // Je récupère mes props en destructurant 'this.props
//           const { theme, label, picture, title} = this.props
//           return (
//                <CardWrapper
//                     theme={theme}>
//                     <CardLabel theme={theme}>{label}</CardLabel>
//                     <CardImage src={picture} alt="freelance" />
//                     <CardTitle data-testid="cardTitle" theme={theme}>
//                          {title}
//                     </CardTitle>
//                </CardWrapper>
//           )
//      }
// }

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
