import React from "react";
import {
  IonButton,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonAvatar,
} from "@ionic/react";
import { useAuth } from "../../contexts/AuthContext";
import BaseTemplate from "../base/BaseTemplate";
import { arrowBackOutline } from "ionicons/icons";

// import './UpdateProfile.css';

export default function Profile() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <BaseTemplate>
      <div className="update-profile">
        <IonGrid>
          <IonRow>
            <IonCol offset-md="1" size-md="10">
              <h1>
                <strong>Profile</strong>
              </h1>
              <IonAvatar>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="profile pic"
                />
              </IonAvatar>
              <IonButton
                type="submit"
                expand="block"
                style={{ marginTop: "7em" }}
                routerLink="/update-profile"
              >
                Update Info
              </IonButton>
              <IonItem>Namey Name</IonItem>
              <IonItem>{currentUser.email}</IonItem>

            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <IonFab
        vertical="top"
        horizontal="start"
        slot="fixed"
        className="ion-padding ion-margin"
      >
        <IonFabButton routerLink="/">
          <IonIcon icon={arrowBackOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </BaseTemplate>
  );
}
