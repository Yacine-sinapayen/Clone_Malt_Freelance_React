import { Link } from 'react-router-dom';

function Header() {
      return (
            <nav>
                  <Link to="/"> Accueil </Link>
                  <Link to="/survey/42"> Questionaire</Link>
                  <Link to="/results">résultats</Link>
                  <Link to='/freelances'> Freelances </Link>
            </nav>
      );
}

export default Header;
