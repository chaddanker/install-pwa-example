import React from 'react';
import { IonItem, IonTextarea, IonCard } from '@ionic/react';
import BaseTemplate from '../base/BaseTemplate';

export default function EstateConfig() {
    return (
        <BaseTemplate title="Estate Config">
            <div style={{padding: '1em'}}>
                <form>
                    <IonItem>
                        <h1 className="leading-normal font-semibold text-gray-600 uppercase">
                            Estate COnfig
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
