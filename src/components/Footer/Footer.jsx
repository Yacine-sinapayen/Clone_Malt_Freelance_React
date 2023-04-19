import { useContext } from 'react';
import { ThemeContext } from '../../utils/Context/Context';
import { FooterContainer, NightModeButton } from './styleFooter.jsx';
import EmailInput from '../EmailInput/EmailInput';

function Footer() {
     const { toggleTheme, theme } = useContext(ThemeContext);
     return (
          <FooterContainer>
            <EmailInput theme={theme} />
               <NightModeButton onClick={() => toggleTheme()}>
                    Changer de mode :{theme === 'light' ? ' ☀️' : ' 🌙'}
               </NightModeButton>
          </FooterContainer>
     );
}

export default Footer;
