import React, { useRef, useState, useEffect } from "react";
import {
  IonText,
  IonButton,
  IonItem,
  IonSelectOption,
  IonSelect,
  IonAvatar,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert,
  IonFab,
  IonFabButton,
  IonIcon,
  IonChip,
} from "@ionic/react";
import BaseTemplate from "../base/BaseTemplate";
import { arrowBackOutline } from "ionicons/icons";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

import "./EditUser.css";

function EditUser(props) {
  const { user } = props;
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading] = useState(false);
  const [mondayAccess, setMondayAccess] = useState();
  const [tuesdayAccess, setTuesdayAccess] = useState();
  const [wednesdayAccess, setWednesdayAccess] = useState();
  const [thursdayAccess, setThursdayAccess] = useState();
  const [fridayAccess, setFridayAccess] = useState();
  const [saturdayAccess, setSaturdayAccess] = useState();
  const [sundayAccess, setSundayAccess] = useState();
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  const params = useParams();

  useEffect(() => {
    props.fetchUser(params.id);
  }, [params.id]);

  useEffect(() => {
    if(user) {
      setMondayAccess(user.access.monday);
      setTuesdayAccess(user.access.tuesday);
      setWednesdayAccess(user.access.wednesday);
      setThursdayAccess(user.access.thursday);
      setFridayAccess(user.access.friday);
      setSaturdayAccess(user.access.saturday);
      setSundayAccess(user.access.sunday);
    }
  }, [user]);

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);

    // const types = ["image/png", "image/jpeg"];

    // if (selectedFile && types.includes(selectedFile.type)) {
    //   setFile(selectedFile);
    //   setError("");
    // } else {
    //   setFile(null);
    //   setError("Please select an image file (png/jpeg).");
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <BaseTemplate>
      {user && <div className="edit-user">
        <IonGrid>
          <IonRow>
            <IonCol offset-md="1" size-md="10">
                  <h1 style={{margin: '1em auto'}} className="leading-normal font-semibold text-gray-600 uppercase text-4xl">{user.name} {user.lastName}</h1>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="file-input">
                        <IonAvatar>
                          <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt="profile pic"
                          />
                        </IonAvatar>
                      </label>
                      <input
                        id="file-input"
                        style={{ display: "none" }}
                        type="file"
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{width: '100%', textAlign: 'center'}}>
                      <IonChip>
                        last inside: {new Date(user.lastIn).toLocaleDateString()}
                      </IonChip>
                    </div>
                    <IonItem>
                      <IonLabel position="floating">First Name</IonLabel>
                      <IonInput
                        type="email"
                        required
                        ref={emailRef}
                        value={user.name}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Last Name</IonLabel>
                      <IonInput value={user.lastName}></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput ref={passwordRef} value={user.email}></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Phone Number</IonLabel>
                      <IonInput ref={passwordRef} value={user.phone}></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Residence</IonLabel>
                      <IonInput
                        type="text"
                        ref={passwordRef}
                        value={user.residence}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      <h1 style={{margin: '1em auto'}}><strong>Access</strong></h1>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Monday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={mondayAccess}
                        onIonChange={(e) => setMondayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Tuesday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={tuesdayAccess}
                        onIonChange={(e) => setTuesdayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Wednesday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={wednesdayAccess}
                        onIonChange={(e) => setWednesdayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Thursday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={thursdayAccess}
                        onIonChange={(e) => setThursdayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Friday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={fridayAccess}
                        onIonChange={(e) => setFridayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Saturday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={saturdayAccess}
                        onIonChange={(e) => setSaturdayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonItem>
                      <IonLabel>Sunday</IonLabel>
                      <IonSelect
                        okText="Okay"
                        cancelText="Dismiss"
                        value={sundayAccess}
                        onIonChange={(e) => setSundayAccess(e.detail.value)}
                      >
                        <IonSelectOption value="full-day">
                          Full Day
                        </IonSelectOption>
                        <IonSelectOption value="blonde">
                          Half Day - Morning
                        </IonSelectOption>
                        <IonSelectOption value="black">
                          Half Day - Afternoon
                        </IonSelectOption>
                        <IonSelectOption value="red">None</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                    <IonButton
                      type="submit"
                      expand="block"
                      style={{ marginTop: "7em" }}
                      disabled={loading}
                      onClick={() => setShowConfirmAlert(true)}
                    >
                      Update
                    </IonButton>
                  </form>
              <div className="cancel-div">
                <IonText>
                  <Link to="/">Cancel</Link>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>}
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
      <IonAlert
        isOpen={showConfirmAlert}
        onDidDismiss={() => setShowConfirmAlert(false)}
        cssClass="my-custom-class"
        header={"Alert"}
        subHeader={"Subtitle"}
        message={"Are you sure you want to make these changes?"}
        buttons={["confirm", "cancel"]}
      />
    </BaseTemplate>
  );
}

const mapStateToProps = (state) => {
  const id = window.location.pathname.replace('/users/edit/', '');
  return {
    user: state.users[id],
  };
};

export default connect(mapStateToProps, { fetchUser })(EditUser);
