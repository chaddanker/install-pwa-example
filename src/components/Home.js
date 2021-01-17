import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { personAddOutline, megaphoneOutline } from 'ionicons/icons';
import BaseTemplate from './base/BaseTemplate';

import './Home.css';

const Home = () => {
    return (
        <BaseTemplate title="Access Control">
            <div className="home">
                <IonButton routerLink="/new">
                    <IonIcon icon={personAddOutline} slot="start"></IonIcon>Add Visitor
                </IonButton>
                <IonButton color="danger">
                    <IonIcon icon={megaphoneOutline} slot="start"></IonIcon>Emergency
                </IonButton>
            </div>
        </BaseTemplate>
    );
}

export default Home;