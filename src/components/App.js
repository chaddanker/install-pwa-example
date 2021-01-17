import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonPage, IonProgressBar, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import { AuthProvider } from '../contexts/AuthContext';

import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import AddNewUser from './AddNewUser/AddNewUser';
import Menu from './Menu/Menu';
import EditUser from './EditUser/EditUser'; 
import NewEstate from './NewEstate/NewEstate';
import NewStand from './NewStand/NewStand';
import EstateConfig from './EstateConfig/EstateConfig';
import EntryLogs from './EntryLogs/EntryLogs';
import Settings from './Settings/Settings';
import EditStand from './EditStand/EditStand';
import Profile from './Profile/Profile';

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
                <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/update-profile" component={UpdateProfile} setChangingPage={setChangingPage}/>
                <Route exact path="/login" render={() => <Login setChangingPage={setChangingPage} />}/>  
                <PrivateRoute exact path="/new-estate" component={NewEstate} />
                <PrivateRoute exact path="/new-stand" component={NewStand} />
                <PrivateRoute exact path="/estate-config" component={EstateConfig} />
                <PrivateRoute exact path="/logs/:id" component={EntryLogs} />
                <Route exact path="/signup" render={() => <Signup setChangingPage={setChangingPage} />} /> 
                <Route exact path="/forgot-password" component={ForgotPassword} setChangingPage={setChangingPage}/> 
                <PrivateRoute exact path="/new" component={AddNewUser} setChangingPage={setChangingPage}/> 
                <PrivateRoute exact path="/users/edit/:id" component={EditUser} />
                <PrivateRoute exact path="/settings" component={Settings} />
                <PrivateRoute exact path="/edit-stand" component={EditStand} />
                <PrivateRoute exact path="/profile" component={Profile} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonPage>
      </IonApp>
    </AuthProvider>
  );
};

const mapStateToProps = ({ users }) => {
	return {
		users: Object.values(users),
	};
};

export default connect(mapStateToProps, { fetchUsers })(App);
