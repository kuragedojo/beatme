import Timer from '../components/Timer';
import Layout from '../components/Layout';
import React from 'react';
import {
  IonSlide,
  IonSlides
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  return (
    <Layout>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <Timer warmUpTime={2} restTime={3} workoutTime={5} rounds={2} sets={3} />
        </IonSlide>
        <IonSlide>
          <Timer warmUpTime={10} restTime={30} workoutTime={240} rounds={4} sets={2} />
        </IonSlide>
      </IonSlides>
    </Layout>
  );
};

export default Home;
