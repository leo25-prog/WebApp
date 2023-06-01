import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRange } from '@ionic/react';
import { TextZoom } from '@capacitor/text-zoom';
TextZoom 
const Tab6: React.FC = () => {

  const [zoomValue, setZoomValue] = useState(100);

  const handleZoomChange = (event: CustomEvent) => {
    const newZoomValue = event.detail.value as number;
    setZoomValue(newZoomValue);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Text Zoom Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRange min={50} max={200} step={10} snaps={true} value={zoomValue} onIonChange={handleZoomChange}></IonRange>
        <div style={{ fontSize: `${zoomValue}%` }}>
          Contenido de tu componente Tab6
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
