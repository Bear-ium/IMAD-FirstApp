import {
    // Default
    IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar,

    // Buttons
    IonButton,

    // Input
    IonItem, IonInput,

    // Checkbox
    IonCheckbox
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Worksheet_4a: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Worksheet 4a</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent fullscreen>
                <IonButton expand="block">Click Me</IonButton>
                <IonButton expand="block">❤️️ Like</IonButton>

                <IonItem>
                    <IonInput placeholder="Username"></IonInput>
                </IonItem>

                <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
            </IonContent>
        </IonPage>
    );
};

export default Worksheet_4a;
