import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useEffect, useState } from 'react';
import { Loader } from '../../utils/style/Atoms';

const CardsContainer = styled.div`
     display: grid;
     gap: 24px;
     grid-template-rows: 350px 350px;
     grid-template-columns: repeat(2, 1fr);
     align-items: center;
     justify-items: center;
`;

const PageTitle = styled.h1`
     font-size: 30px;
     color: black;
     text-align: center;
     padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
     font-size: 25px;
     color: ${colors.secondary};
     font-wheight: 300;
     text-align: center;
     padding-bottom: 30px;
`;

function Freelances() {
     const [isDataLoading, setDataLoading] = useState(false);
     const [error, setError] = useState(false);
     const [freelancersList, setFreelancesList] = useState([]);

     useEffect(() => {
          async function fetchFreelances() {
               setDataLoading(true);
               try {
                    const response = await fetch(
                         `http://localhost:8000/freelances`
                    );
                    const { freelancersList } = await response.json();
                    setFreelancesList(freelancersList);
                    console.log(freelancersList);
               } catch (err) {
                    console.log('===== error =====', err);
                    setError(true);
               } finally {
                    setDataLoading(false);
               }
          }
          fetchFreelances();
     }, []);

     if (error) {
          return <span>Oups il y a eu un problème</span>;
     }

     return (
          <div>
               <PageTitle>Trouvez votre prestataire</PageTitle>
               <PageSubtitle>
                    Chez Shiny nous réunissons les meilleurs profil pour vous.
               </PageSubtitle>
               {isDataLoading ? (
                    <Loader />
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
