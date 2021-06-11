import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonFab,
  IonFabButton
} from '@ionic/react';
import { pencil, timer } from 'ionicons/icons';
import React from 'react';
import './Layout.css';
import MenuSettings from './MenuSettings';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <MenuSettings></MenuSettings>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>BeatMe</IonTitle>
            <IonButtons slot="end">
              <IonButton ><IonIcon icon={pencil} slot="icon-only"></IonIcon></IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {children}
        </IonContent>
        <IonFooter>
          <IonToolbar>
            
          </IonToolbar>
        </IonFooter>
        <IonFab vertical="bottom" horizontal="center" >
              <IonFabButton href="/home">
                <IonIcon icon={timer} />
              </IonFabButton>
            </IonFab>
      </IonPage>
    </div>
  );
};

export default Layout;
