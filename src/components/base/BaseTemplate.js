import React, { useState, useEffect } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonIcon,
  IonButtons,
  IonButton,
  IonAvatar,
} from "@ionic/react";
import { logInOutline, menuOutline } from "ionicons/icons";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useAuth } from "../../contexts/AuthContext";
import UserMenuPopover from "../UserMenuPopover/UserMenuPopover";
import { useLocation } from 'react-router-dom';

import Time from '../Time/Time';
import "./BaseTemplate.css";

export default function BaseTemplate({
  children,
  title,
  backButton,
  backButtonDefaultLink,
}) {
  const { currentUser } = useAuth();
  const [userPopoverState, setShowUserPopover] = useState({
    showPopover: false,
    event: undefined,
  });
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if(menu) {
      if(currentPath !== location.pathname) {
        menu.close();
        setCurrentPath(location.pathname);
      }
    }

  }, [location, currentPath]);

  async function handleMenuToggle() {
    const menu = document.getElementById("mobile-menu");
    const isOpen = await menu.isOpen();

    if (!isOpen) {
      menu.open();
    } else {
      menu.close();
    }
  }

  return (
    <>
      {window.innerWidth < 990 ? <MobileMenu /> : ""}
      <IonHeader style={{ textAlign: "center" }}>
        <IonToolbar color="primary">
          <div className="time-div">
            {window.innerWidth > 990 && <Time />}
          </div>
          <IonButtons slot="start">
            {window.innerWidth < 990 ? (
              <IonButton onClick={handleMenuToggle}>
                <IonIcon size="large" icon={menuOutline}></IonIcon>
              </IonButton>
            ) : (
              ""
            )}
          </IonButtons>
          <IonTitle><strong>{title}</strong></IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={(e) => {
                e.persist();
                setShowUserPopover({ showPopover: true, event: e });
              }}
            >
              {currentUser ? (
                <IonAvatar style={{ height: 35, width: 35 }}>
                  <img src="/assets/profile-icon.png" alt="user avatar" />
                </IonAvatar>
              ) : (
                <IonIcon size="large" icon={logInOutline}></IonIcon>
              )}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ margin: "5em auto" }} id="main-content">
        <div className="background">
          <div className="page-content">
            {children}
          </div>
        </div>
      </IonContent>
      <UserMenuPopover
        popoverState={userPopoverState}
        setShowPopover={setShowUserPopover}
      />
    </>
  );
}
