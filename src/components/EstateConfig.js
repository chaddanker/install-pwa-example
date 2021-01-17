import React from 'react';
import { IonItem, IonTextarea, IonCard } from '@ionic/react';
import BaseTemplate from './base/BaseTemplate';

export default function EstateConfig() {
    return (
        <BaseTemplate title="Estate Config">
            <div style={{padding: '1em'}}>
                <form>
                    <IonItem>
                        <h1>
                            <strong>Estate Config</strong>
                        </h1>
                    </IonItem>
                    <IonCard>
                        <IonItem>
                            <IonTextarea></IonTextarea>
                        </IonItem>
                    </IonCard>
                </form>
            </div>
        </BaseTemplate>
    )
}
