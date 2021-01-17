import React, { Component } from "react";
import { IonButton, IonAlert } from "@ionic/react";

import "./InstallButton.css";

export default class InstallButton extends Component {
  constructor() {
    super();
    this.state = {
      showButton: false,
      showAlert: false,
    };
    this.onInstallBtnClicked = this.onInstallBtnClicked.bind(this);
  }

  componentDidMount() {

    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    if(this.isIos() && !isInStandaloneMode()) {
        this.setState({
            showButton: true
        });
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.setState({ showButton: true });
    });
  }

  // Detects if device is on iOS
  isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };

  onInstallBtnClicked = () => {
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    // Checks if should display install popup notification:
    if (this.isIos() && !isInStandaloneMode()) {
      this.setState({ showAlert: true });
    }

    this.setState({ showButton: false });
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        this.deferredPrompt = null;
      });
    }
  };

  render() {
    return (
      <>
        {this.state.showButton && (
          <IonButton
            onClick={this.onInstallBtnClicked}
            id="install"
            expand="block"
            style={{
              cursor: "pointer",
              position: "absolute",
              bottom: 0,
              width: "99%",
            }}
          >
            install app
          </IonButton>
        )}
        <IonAlert
          isOpen={this.state.showAlert}
          onDidDismiss={() => this.setState({ showAlert: false })}
          cssClass="my-custom-class"
          header={"Install App"}
          message={
            'click on <ion-icon size="large" name="share-outline"></ion-icon> then add to home screen <ion-icon size="large" name="duplicate-outline"></ion-icon>'
          }
          buttons={["OK"]}
        />
      </>
    );
  }
}
