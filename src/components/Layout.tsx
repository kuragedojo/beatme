import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonFab,
  IonFabButton,
  IonIcon,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton,
  IonButton
} from '@ionic/react';
import { pencil, settings, timer } from 'ionicons/icons';
import React from 'react';
import './Layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonTitle>Menu</IonTitle>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon icon={settings} slot="start"></IonIcon>
              <IonLabel>Einstellungen</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
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
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton>
              <IonIcon icon={timer} />
            </IonFabButton>
          </IonFab>
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
