import React, { useState } from "react";
import {
  IonText,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import BaseTemplate from "./base/BaseTemplate";
import "./AddNewUser.css";
import { arrowBackOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

export default function AddNewItem() {
  const [loading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <BaseTemplate title="New Stand">
      <div style={{ margin: "1em" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2em" }}>New Stand</h1>
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Phone Number</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem style={{ marginTop: "1em" }}>
            <IonLabel>
              <strong>Stand Members</strong>
            </IonLabel>
          </IonItem>
          {/* <IonList>
                        <IonItem>
                            <IonLabel>Pokémon Yellow</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Mega Man X</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>The Legend of Zelda</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Pac-Man</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Super Mario World</IonLabel>
                        </IonItem>
                    </IonList>  */}
          <IonItem>
            <IonButton style={{ marginTop: 0 }}>Add member</IonButton>
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
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "2em",
          }}
        >
          <IonText>
            <Link to="/">Cancel</Link>
          </IonText>
        </div>
      </div>
      <IonFab
        vertical="top"
        horizontal="start"
        slot="fixed"
        style={{ marginBottom: "3em" }}
        className="ion-padding ion-margin"
      >
        <IonFabButton routerLink="/">
          <IonIcon icon={arrowBackOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </BaseTemplate>
  );
}
