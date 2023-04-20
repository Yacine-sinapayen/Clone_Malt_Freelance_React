import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './Home.jsx';
import { ThemeProvider } from '../../utils/Context/Context.jsx';

describe('The Home component', () => {
    // Je test que mon composant 'render' sans crasher, je n'oublie pas de le 'wrapper' avec un 'MemoryRouter' si j'utilise react-router-dom et aussi avec 'ThemeProvider' lorsque j'utilise un context.
    it('should render without crash', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )
    })
    // Je vais maintenant vérifier que le titre de la page Home s'affiche bien.
    it('should render title', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )
        // 'screen.debug()' me permet d'afficher le contenu de mon composant dans le terminal si jamais je me souviens plus d'un élément. Ça évite de devoir lancer un 'yarn start' pour afficher mon app.
        // screen.debug()
        // Grâce à la ligne ci-dessus j'ai pu récupérer le contenu de mon 'h2' et vérifier le test ci-dessous.
        expect(screen.getByText('Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents')).toBeTruthy()

        // On va pousser notre test un peu plus loin en vérifiant à le fois le rôle (si c'est bien un h2,h3 etc) et le contenu. 'Level : 3' <=> 'h2'
        expect(screen.getByRole('heading', {level: 2, text:'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'}))
    })
})