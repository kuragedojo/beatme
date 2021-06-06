import Timer from '../components/Timer';
import Layout from '../components/Layout';
import './Home.css';
import { timer } from 'ionicons/icons';
import React from 'react';
import {
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Timer warmUpTime={2} restTime={3} workoutTime={5} rounds={2} sets={3} />
      <IonFab vertical="bottom" horizontal="center" slot="fixed" >
        <IonFabButton href="/home">
          <IonIcon icon={timer} />
        </IonFabButton>
      </IonFab>
    </Layout>
  );
};

export default Home;
