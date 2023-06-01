import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { StatusBar } from '@capacitor/status-bar';


const Tab4: React.FC = () => {
  
  const [statusBarColor, setStatusBarColor] = useState('#3880ff');

  const changeStatusBarColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    StatusBar.setBackgroundColor({ color: randomColor });
    setStatusBarColor(randomColor);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Haptics Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={changeStatusBarColor}>Cambiar Color de StatusBar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
