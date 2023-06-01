import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { Keyboard } from '@capacitor/keyboard';


const Tab3: React.FC = () => {
  
  const showKeyboard = () => {
    Keyboard.show();
  };
  
  const hideKeyboard = () => {
    Keyboard.hide();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Keyboard Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={showKeyboard}>Mostrar Teclado</IonButton>
        <IonButton onClick={hideKeyboard}>Ocultar Teclado</IonButton>
        {/* Contenido del componente */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
