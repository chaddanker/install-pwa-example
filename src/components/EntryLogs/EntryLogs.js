import React from 'react';
import BaseTemplate from '../base/BaseTemplate';
import { IonGrid, IonCol, IonRow, IonDatetime, IonItem, IonLabel } from '@ionic/react';

import './EntryLogs.css';

const logs = [
    {
        name: 'Chad',
        idNumber: '9410305045082',
        timeIn: new Date().toLocaleTimeString(),
        type: 'visitor',
        residence: '3A'
    },
    {
        name: 'Megan',
        idNumber: '9810305045082',
        timeIn: new Date().toLocaleTimeString(),
        type: 'resident',
        residence: '2D'
    },
    {
        name: 'Jaco',
        idNumber: '5610305089082',
        timeIn: new Date().toLocaleTimeString(),
        type: 'contractor',
        residence: '4B'
    }
];

export default function EntryLogs() {
    return (
        <BaseTemplate title="Entry Logs">
            <div className="entry-logs">
            <IonItem style={{textAlign: 'center'}}>
                <IonDatetime className="leading-normal font-semibold text-gray-600 uppercase text-4xl" style={{margin: 'auto'}} placeholder="Select Date" value={"2021-01-16T16:17:58.625+02:00"} onIonChange={e => console.log(e.detail.value)}></IonDatetime>
            </IonItem>
            
                <IonGrid>
                    {logs.map(l => (
                        <IonRow key={l.idNumber}>
                            <IonCol>
                                {l.name}
                            </IonCol>
                            <IonCol>
                                {l.idNumber}
                            </IonCol>
                            <IonCol>
                                {l.type}
                            </IonCol>
                            <IonCol>
                                {l.residence}
                            </IonCol>
                            <IonCol>
                                {l.timeIn}
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </div>
        </BaseTemplate>
    )
}
