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
  IonButton
} from '@ionic/react';
import { pencil } from 'ionicons/icons';
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
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen={true}>
            {children}
          </IonContent>
          <IonFooter translucent={true}>
            <IonToolbar>
            </IonToolbar>
          </IonFooter>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Layout;
