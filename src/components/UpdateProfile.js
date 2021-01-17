import React, { useRef, useState } from "react";
import {
  IonText,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonFab,
  IonFabButton,
  IonIcon,
  IonAvatar
} from "@ionic/react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import BaseTemplate from "./base/BaseTemplate";
import { arrowBackOutline } from "ionicons/icons";

import './UpdateProfile.css';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("passwords do not match");
      return;
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <BaseTemplate title="Update Profile">
      <div className="update-profile">
        <IonGrid>
          <IonRow>
            <IonCol offset-md="1" size-md="10">
              <h1 style={{  }}>
                Update Profile
              </h1>
              <IonAvatar>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" />
              </IonAvatar>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    required
                    ref={emailRef}
                    defaultValue={currentUser.email}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Residence</IonLabel>
                  <IonInput ref={passwordRef}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password" ref={passwordRef}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password Confirm</IonLabel>
                  <IonInput
                    type="password"
                    ref={passwordConfirmRef}
                  ></IonInput>
                </IonItem>
                <IonButton
                  type="submit"
                  expand="block"
                  style={{ marginTop: "7em" }}
                  disabled={loading}
                >
                  Update
                </IonButton>
              </form>
              <div
                className="bottom-div"
              >
                <IonText>
                  <Link to="/">Cancel</Link>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={error !== ""}
          onDidDismiss={() => setError("")}
          header={"Error"}
          message={error}
          buttons={["OK"]}
        />
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
