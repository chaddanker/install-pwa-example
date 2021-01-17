import React from 'react';
import { IonPopover, IonButton, IonIcon, IonList, IonLabel, IonItem } from '@ionic/react';
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import { logInOutline, logOutOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';

import './UserMenuPopover.css';

export default function UserMenuPopover({ popoverState, setShowPopover }) {
  const { currentUser, logout } = useAuth();
//   const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {

    // setError("");

    try {
      await logout();
      history.push("/");
    } catch {
    //   setError("Failed to log out");
    }
  }

  return (
    <>
      <IonPopover
        cssClass='user-menu-popover'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <IonList style={{ width: '100%' }}>
          <IonItem routerLink="update-profile">
              <IonIcon style={{marginRight: '0.5em'}} icon={personCircleOutline}></IonIcon>
              <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem routerLink="settings">
              <IonIcon style={{marginRight: '0.5em'}} icon={settingsOutline}></IonIcon>
              <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonList>
            {!currentUser ? (
              <IonButton expand="block" routerLink="/login">
                login
                <IonIcon style={{marginLeft: '0.15em'}} icon={logInOutline}></IonIcon>
              </IonButton>
            ) : (
              <IonButton expand="block" onClick={handleLogout}>
                logout
                <IonIcon style={{marginLeft: '0.15em'}} icon={logOutOutline} />
              </IonButton>
            )}
      </IonPopover>
    </>
  );
};