import React, { useState } from "react";
import {
  IonButton,
  IonItem,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import BaseTemplate from "./base/BaseTemplate";
import "./AddNewUser.css";
import { arrowBackOutline } from "ionicons/icons";

export default function AddNewItem() {
  const [loading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <BaseTemplate title="New Estate">
      <div style={{ margin: "1em", padding: "1em" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2em" }}>New Estate</h1>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Select Estate Manager</IonLabel>
            <IonSelect value={"admin-1"} okText="Okay" cancelText="Dismiss">
              <IonSelectOption value="admin-1">Admin 1</IonSelectOption>
              <IonSelectOption value="admin-2">Admin 2</IonSelectOption>
              <IonSelectOption value="admin-3">Admin 3</IonSelectOption>
              <IonSelectOption value="admin-4">Admin 4</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton
            type="submit"
            expand="block"
            style={{ marginTop: "7em" }}
            disabled={loading}
          >
            Add
          </IonButton>
        </form>
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
