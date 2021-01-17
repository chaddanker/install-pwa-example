import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonPage, IonProgressBar, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import { AuthProvider } from '../contexts/AuthContext';

import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import AddNewUser from './AddNewUser';
import Menu from './Menu';
import UserView from './UserView';
import Home from './Home';
import EditUser from './EditUser'; 
import NewEstate from './NewEstate';
import NewStand from './NewStand';
import EstateConfig from './EstateConfig';
import EntryLogs from './EntryLogs';
import Settings from './Settings';
import EditStand from './EditStand';

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
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" render={() => <Login setChangingPage={setChangingPage} />}/>  
                <Route exact path="/new-estate" component={NewEstate} />
                <Route exact path="/new-stand" component={NewStand} />
                <Route exact path="/estate-config" component={EstateConfig} />
                <Route exact path="/logs/:id" component={EntryLogs} />
                <Route exact path="/signup" render={() => <Signup setChangingPage={setChangingPage} />} /> 
                <Route exact path="/forgot-password" component={ForgotPassword} setChangingPage={setChangingPage}/> 
                <PrivateRoute exact path="/new" component={AddNewUser} setChangingPage={setChangingPage}/> 
                <Route exact path="/users/:id" render={() => <UserView />} />
                <Route exact path="/users/edit/:id" render={() => <EditUser />} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/edit-stand" component={EditStand} />
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
