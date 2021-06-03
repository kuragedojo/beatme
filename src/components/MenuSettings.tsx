import { IonMenu, IonHeader, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React from 'react';
import './MenuSettings.css';

const MenuSettings: React.FC = ({ children }) => {
    return (
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
    )
}

export default MenuSettings