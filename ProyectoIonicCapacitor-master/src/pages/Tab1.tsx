import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { Plugins/*, HapticsImpactStyle*/ } from '@capacitor/core';
const { Haptics } = Plugins;

const Tab1: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleHapticFeedback = async () => {
    try {
      await Haptics.vibrate();
      //await Haptics.impact({ style: HapticsImpactStyle.Light });
    } 
    catch (error) {
      console.log('Error while triggering haptic feedback:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Haptics Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowActionSheet(true)}>
            <IonIcon name="hand-right" />
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: 'Trigger Haptic Feedback',
              handler: handleHapticFeedback,
            },
            {
              text: 'Cancel',
              role: 'cancel',
            },
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
