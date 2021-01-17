import React, { useState, useEffect } from "react";
import {
  IonMenu,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import {
  homeOutline,
  settingsOutline,
  createOutline,
  addCircleOutline,
  fileTrayFullOutline,
} from "ionicons/icons";
import { connect } from "react-redux";
import InstallButton from "../InstallButton/InstallButton";
import { fetchEstates, setEstate } from "../../actions";
import { useAuth } from "../../contexts/AuthContext";
import "./Menu.css";

function Menu({ fetchEstates, setEstate, estates, activeEstate }) {
  const [currentEstate, setCurrentEstate] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchEstates();
  }, [fetchEstates]);

  useEffect(() => {
    if (currentEstate === null && estates[0]) {
      setCurrentEstate(estates[0].name);
      setEstate(estates[0].name);
    }
  }, [estates, setCurrentEstate, currentEstate, setEstate]);

  useEffect(() => {
    console.log(activeEstate);
  }, [activeEstate]);

  function handleSelectChange(e) {
    setCurrentEstate(e.detail.value);
    setEstate(e.detail.value);
  }

  return (
    <>
      {currentUser && (
        <IonMenu side="start" type="overlay" contentId="main" id="menu">
          <img src="/assets/inovio.jpeg" alt="inovio logo" />
          <IonContent
            style={{
              position: "relative",
              "--background": "var(--ion-primary-color)",
            }}
          >
            <IonSelect
              value={currentEstate}
              okText="Okay"
              cancelText="Dismiss"
              onIonChange={(e) => handleSelectChange(e)}
            >
              {estates.map((estate) => {
                return (
                  <IonSelectOption value={estate.name} key={estate.name}>
                    {estate.name}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
            <IonList id="inbox-list" style={{ width: "100%" }}>
              <IonItem routerLink="/dashboard">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>Dashboard
              </IonItem>
              {currentUser && currentUser.role === "Administrator" && (
                <>
                  <IonItem routerLink="/estate-config">
                    <IonIcon slot="start" icon={settingsOutline}></IonIcon>
                    Estate Config
                  </IonItem>
                  <IonItem routerLink="/new-estate">
                    <IonIcon slot="start" icon={addCircleOutline}></IonIcon>New
                    Estate
                  </IonItem>
                </>
              )}
              <IonItem routerLink="/new-stand">
                <IonIcon slot="start" icon={addCircleOutline}></IonIcon>New
                Stand
              </IonItem>
              <IonItem routerLink="/edit-stand">
                <IonIcon slot="start" icon={createOutline}></IonIcon>Edit Stand
              </IonItem>
              <IonItem routerLink="/logs/estate-id">
                <IonIcon slot="start" icon={fileTrayFullOutline}></IonIcon>Entry
                Logs
              </IonItem>
            </IonList>
            <InstallButton />
          </IonContent>
        </IonMenu>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    estates: state.estates,
    activeEstate: state.activeEstate,
  };
};

export default connect(mapStateToProps, { fetchEstates, setEstate })(Menu);
