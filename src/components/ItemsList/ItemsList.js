import React from "react";
import {
  IonList,
  IonItem,
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
        <h1 style={{ textAlign: "left", margin: '1em', margin: '1.5em 0 0 1em' }} className="leading-normal font-semibold text-gray-600 uppercase"><strong>{title}</strong></h1>
        <IonGrid>
            <IonRow>
                <IonCol size-md="4">

                </IonCol>
                <IonCol size-md="3.25">
                    <strong>Time In</strong>
                </IonCol>
                <IonCol size-md="3">
                    <strong>Time Out</strong>
                </IonCol>
            </IonRow>
        </IonGrid>
        {collection.map((item) => {
          return (
            <IonItem routerLink={`/users/edit/${item.id}`} key={item.id} className="text-gray-600">
            <IonAvatar
                slot="start"
                style={{ height: 35, width: 35 }}
            >
                <img src={item.avatar} alt="avatar" />
            </IonAvatar>
              <IonGrid>
                <IonRow>
                    <IonCol size-md="3.5" style={{display: 'flex', alignItems: 'center'}}>
                        {item.name}
                    </IonCol>
                    <IonCol size-md="3.5">
                        {new Date(item.lastIn).toLocaleTimeString()}
                    </IonCol>
                    <IonCol size-md="3.5">
                        {new Date(item.lastIn).toLocaleTimeString()}
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
      <IonList style={{ margin: "0 auto" }} className="text-gray-500">
        {renderList(contractors, "Contractors")}
        {renderList(domestics, "Domestics")}
        {renderList(residents, "Residents")}
      </IonList>
    </div>
  );
}
