import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonBadge,
    IonItem,
    IonLabel,
    IonList,
    IonToast
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Worksheet 4b</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonContent fullscreen>
                <IonButton id="open-toast" expand="block">
                    Open
                </IonButton>
                <p>This toast example uses triggers to automatically open a toast when the button is clicked.</p>

                <IonList>
                    <IonItem>
                        <IonBadge slot="end">22k</IonBadge>
                        <IonLabel>Followers</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end" color={'secondary'}>118k</IonBadge>
                        <IonLabel>Likes</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end" color={'tertiary'}>34k</IonBadge>
                        <IonLabel>Stars</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end" color={'success'}>80</IonBadge>
                        <IonLabel>Completed</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end" color={'warning'}>70</IonBadge>
                        <IonLabel>Warnings</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonBadge slot="end" color={'danger'}>1000</IonBadge>
                        <IonLabel>Notifications</IonLabel>
                    </IonItem>
                </IonList>

                <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
            </IonContent>
        </IonPage>
    );
};

export default Home;
