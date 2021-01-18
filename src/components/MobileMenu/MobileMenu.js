import React, { useState, useEffect } from 'react';
import { IonMenu, IonIcon, IonContent, IonList } from '@ionic/react';
import InstallButton from '../InstallButton/InstallButton';
import './MobileMenu.css';
import { close } from 'ionicons/icons';

function MobileMenu({fetchEstates, estates}) {
  function closeMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.close();
  }

  return (
    <IonMenu side="start" type="overlay" contentId="main-content" id="mobile-menu">
       <div style={{ width: '100%', position: 'relative', height: '20px', paddingBottom: '2em', paddingTop: '1em'}}><IonIcon onClick={() => closeMenu()} size="large" style={{ position: 'absolute', right: '0.5em' }} icon={close}></IonIcon></div>
      <IonContent style={{ position: "relative" }}>
        <IonList id="inbox-list">

        </IonList>
        <InstallButton />
      </IonContent>
    </IonMenu>
  )
}

export default MobileMenu;