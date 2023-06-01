import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

//const { Motion } = Plugins;
const { Mot } = Plugins;

const Tab5: React.FC = () => {
  const [acceleration, setAcceleration] = useState<{ x: number; y: number; z: number }>({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    // Suscribirse a los eventos de cambio de aceleración
    const subscription = Motion.addListener('accel', ({ acceleration }) => {
      setAcceleration(acceleration);
    });

    return () => {
      // Eliminar la suscripción al desmontar el componente
      subscription.remove();
    };
  }, []);

  const startListening = async () => {
    try {
      await Mot.start();
      console.log('Escuchando eventos de movimiento');
    } catch (error) {
      console.error('Error al iniciar la escucha de eventos de movimiento', error);
    }
  };

  const stopListening = async () => {
    try {
      await Mot.stop();
      console.log('Deteniendo la escucha de eventos de movimiento');
    } catch (error) {
      console.error('Error al detener la escucha de eventos de movimiento', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Motion Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={startListening}>Iniciar escucha</IonButton>
        <IonButton onClick={stopListening}>Detener escucha</IonButton>

        <div>
          <p>Aceleración X: {acceleration.x}</p>
          <p>Aceleración Y: {acceleration.y}</p>
          <p>Aceleración Z: {acceleration.z}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
