import React, { useState, useEffect } from 'react';
import { IonMenu, IonIcon, IonContent, IonList, IonItem, IonSelectOption, IonSelect } from '@ionic/react';
import { homeOutline, settingsOutline, createOutline, addCircleOutline, fileTrayFullOutline} from 'ionicons/icons';
import { connect } from 'react-redux';
import InstallButton from '../InstallButton/InstallButton';
import { fetchEstates } from '../../actions';
import './MobileMenu.css';
import { close } from 'ionicons/icons';

function MobileMenu({fetchEstates, estates}) {

  const [currentEstate, setCurrentEstate] = useState(null);

  function closeMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.close();
  }

  useEffect(() => {
    if(currentEstate === null && estates[0]) {
        setCurrentEstate(estates[0].name);
    }
  }, [estates, setCurrentEstate, currentEstate]);

  
  return (
    <IonMenu side="start" type="overlay" contentId="main-content" id="mobile-menu">
       <div style={{ width: '100%', position: 'relative', height: '20px', paddingBottom: '2em', paddingTop: '1em'}}><IonIcon onClick={() => closeMenu()} size="large" style={{ position: 'absolute', right: '0.5em' }} icon={close}></IonIcon></div>
      <img src="/assets/inovio.jpeg" alt="inovio logo" />
      <IonContent style={{ position: "relative" }}>
        <IonSelect value={currentEstate} okText="Okay" cancelText="Dismiss" onIonChange={e => setCurrentEstate(e.detail.value)}>
          {estates.map(estate => {
            return (
              <IonSelectOption value={estate.name} key={estate.name}>{estate.name}</IonSelectOption>
            )
          })}
        </IonSelect>
        <IonList id="inbox-list">
          <IonItem routerLink="/dashboard">
            <IonIcon slot="start" icon={homeOutline}></IonIcon>Dashboard
          </IonItem>
          <IonItem routerLink="/estate-config">
            <IonIcon slot="start" icon={settingsOutline}></IonIcon>Estate Config
          </IonItem>
          <IonItem routerLink="/new-estate">
            <IonIcon slot="start" icon={addCircleOutline}></IonIcon>New Estate
          </IonItem>
          <IonItem routerLink="/new-stand">
            <IonIcon slot="start" icon={addCircleOutline}></IonIcon>New Stand
          </IonItem>
          <IonItem routerLink="/edit-stand">
            <IonIcon slot="start" icon={createOutline}></IonIcon>Edit Stand
          </IonItem>
          <IonItem routerLink="/logs/estate-id">
              <IonIcon slot="start" icon={fileTrayFullOutline}></IonIcon>Entry Logs
          </IonItem>
        </IonList>
        <InstallButton />
      </IonContent>
    </IonMenu>
  )
}
const mapStateToProps = (state) => {
  return {
    estates: state.estates
  }
}

export default connect(mapStateToProps, { fetchEstates })(MobileMenu);