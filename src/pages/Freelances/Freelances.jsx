import Card from '../../components/Card/Card';
import { Loader } from '../../utils/style/Atoms';
import { useFetch, useTheme } from '../../utils/Hook/Hooks';
import { CardsContainer, PageTitle, PageSubtitle, WrapperLoader } from './freelanceStyle';



function Freelances() {
     // Ancienne version pour récupérer mes données.
     // const [isDataLoading, setDataLoading] = useState(false);
     // const [error, setError] = useState(false);
     // const [freelancersList, setFreelancesList] = useState([]);

     // useEffect(() => {
     //      async function fetchFreelances() {
     //           setDataLoading(true);
     //           try {
     //                const response = await fetch(
     //                     `http://localhost:8000/freelances`
     //                );
     //                const { freelancersList } = await response.json();
     //                setFreelancesList(freelancersList);
     //                console.log(freelancersList);
     //           } catch (err) {
     //                console.log('===== error =====', err);
     //                setError(true);
     //           } finally {
     //                setDataLoading(false);
     //           }
     //      }
     //      fetchFreelances();
     // }, []);

     // 1 - Je récupère 'theme' depuis le 'context et useTheme dans mon fichier 'hooks' dans mon dossier 'utils'
     const { theme } = useTheme();

     // J'utilise mon hook useFetch pour récupérer les données.
     const { data, isLoading, error } = useFetch(
          `http://localhost:8000/freelances`
     );

     // Ici le "?" permet de s'assurer que data existe bien.
     const freelancersList = data?.freelancersList;

     if (error) {
          return <span data-testid="error">{error}</span>;
     }

     return (
          <div>
               <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
               <PageSubtitle theme={theme}>
                    Chez Shiny nous réunissons les meilleurs profil pour vous.
               </PageSubtitle>
               {isLoading ? (
                    <WrapperLoader>
                         <Loader theme={theme} data-testid="loader" />
                    </WrapperLoader>
               ) : (
                    <CardsContainer>
                         {freelancersList.map((profile, index) => (
                              <Card
                                   key={`${profile.name}-${index}`}
                                   label={profile.jobTitle}
                                   picture={profile.picture}
                                   title={profile.name}
                              />
                         ))}
                    </CardsContainer>
               )}
          </div>
     );
}

export default Freelances;
