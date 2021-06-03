import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';
import './Home.css';

const Home: React.FC = () => {
  return (
    <Layout>
        <ExploreContainer />
    </Layout>
  );
};

export default Home;
