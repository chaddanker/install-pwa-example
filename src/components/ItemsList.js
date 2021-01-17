import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import "./ItemsList.css";

export default function ItemsGrid({ items }) {
  const contractors = items.filter((user) => {
    return user.type === "contractor";
  });
  const residents = items.filter((user) => {
    return user.type === "resident";
  });
  const domestics = items.filter((user) => {
    return user.type === "domestic";
  });

  function renderList(collection, title) {
    return (
      <>
        <h1 style={{ textAlign: "left", margin: '1em' }}><strong>{title}</strong></h1>
        <IonGrid>
            <IonRow>
                <IonCol size="3.5">

                </IonCol>
                <IonCol size="3.25">
                    <strong>Time In</strong>
                </IonCol>
                <IonCol size="3">
                    <strong>Time Out</strong>
                </IonCol>
            </IonRow>
        </IonGrid>
        {collection.map((item) => {
          return (
            <IonItem routerLink={`/users/edit/${item.id}`} key={item.id}>
            <IonAvatar
                slot="start"
                style={{ height: 50, width: 50, marginRight: "0.75em" }}
            >
                <img src={item.avatar} alt="avatar" />
            </IonAvatar>
              <IonGrid style={{width: '100%'}}>
                <IonRow>
                    <IonCol size="3.5" style={{display: 'flex', alignItems: 'center'}}>
                        <IonLabel>{item.name}</IonLabel>
                    </IonCol>
                    <IonCol size="3.5">
                        <p
                        style={{
                            fontSize: "0.75em",
                            width: window.innerWidth < 600 ? 70 : 120,
                        }}
                        >
                            {new Date(item.lastIn).toLocaleTimeString()}
                        </p>
                    </IonCol>
                    <IonCol size="3.5">
                        <p
                        style={{
                            fontSize: "0.75em",
                            width: window.innerWidth < 600 ? 70 : 120,
                        }}
                        >
                            {new Date(item.lastIn).toLocaleTimeString()}
                        </p>
                    </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          );
        })}
      </>
    );
  }

  return (
    <div className="items-list" style={{ textAlign: "center" }}>
      <IonList style={{ margin: "0 auto" }}>
        {renderList(contractors, "Contractors")}
        {renderList(domestics, "Domestics")}
        {renderList(residents, "Residents")}
      </IonList>
    </div>
  );
}
