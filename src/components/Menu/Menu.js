import React, { useState, useEffect } from "react";
import {
  IonMenu,
  IonContent,
  IonList,
} from "@ionic/react";
import InstallButton from "../InstallButton/InstallButton";
import { useAuth } from "../../contexts/AuthContext";
import "./Menu.css";

function Menu({ fetchEstates, setEstate, estates, activeEstate }) {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser && (
        <IonMenu side="start" type="overlay" contentId="main" id="menu">
          <IonContent
            style={{
              position: "relative",
              "--background": "var(--ion-primary-color)",
            }}
          >
            <IonList style={{ width: "100%" }}>

            </IonList>
            <InstallButton />
          </IonContent>
        </IonMenu>
      )}
    </>
  );
}

export default Menu;
