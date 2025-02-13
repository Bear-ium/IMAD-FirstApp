import {
  // Default
  IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar,

  // Imports for a button
  IonButton,

  // Imports for a List
  IonItem, IonLabel, IonList,

  // Imports for a Card
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Demo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Demo App</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonText>Text</IonText>
        <IonButton>Default</IonButton>
        <IonButton size='small'>Small</IonButton>
        <IonButton size='large'>Large</IonButton>
        <IonButton color={'danger'}>Default Red</IonButton>
        <IonButton color={'warning'}>Default Warning</IonButton>
        <IonButton color={'medium'}>Default Medium</IonButton>
        <IonButton color={'success'} fill={'outline'}>Outline</IonButton>


        <IonList lines="none">
          <IonItem>
            <IonLabel>
              Item 1
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>
              Item 2
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonButton>
              Item 3
            </IonButton>
          </IonItem>
        </IonList>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Demo;
