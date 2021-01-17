import React from 'react';
import { IonPopover } from '@ionic/react';

export default function LocationsPopover({ popoverState, setShowPopover }) {

  return (
    <>
      <IonPopover
        cssClass='my-custom-class'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <p>This is popover content</p>
      </IonPopover>
    </>
  );
};