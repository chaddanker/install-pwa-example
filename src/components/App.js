import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonPage, IonProgressBar, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';

import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard/Dashboard';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

/* Core CSS */
import '../theme/core.css';

const App = () => {
  const [changingPage, setChangingPage] = useState(false);

  return (
    <AuthProvider>
      <IonApp>
        <IonPage>
        {changingPage && <IonProgressBar type="indeterminate"></IonProgressBar>}
          <IonReactRouter id="main-content">
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route exact path="/" render={() => <Redirect to="/" />} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/update-profile" component={UpdateProfile} setChangingPage={setChangingPage}/>
                <Route exact path="/login" render={() => <Login setChangingPage={setChangingPage} />}/>  
                <Route exact path="/signup" render={() => <Signup setChangingPage={setChangingPage} />} /> 
                <Route exact path="/forgot-password" component={ForgotPassword} setChangingPage={setChangingPage}/> 
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonPage>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
