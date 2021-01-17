import React, { useState, useEffect } from "react";
import {
  IonAlert,
  IonFab,
} from "@ionic/react";
import Fuse from 'fuse.js';
import { connect } from 'react-redux';
import BaseTemplate from './base/BaseTemplate';
import ItemsList from './ItemsList';
import Search from './Search';
import LocationsPopover from './LocationsPopover';
import { fetchUsers } from '../actions';

function Dashboard({users, fetchUsers}) {
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [locationsPopoverState, setShowLocationsPopover] = useState({ showPopover: false, event: undefined });

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    useEffect(() => {
        const usersFuse = new Fuse(users, {
            keys: ['name', 'email', 'residence', 'type'],
        });
        setSearchResults(usersFuse.search(searchQuery));
    }, [searchQuery, users]);

  return (
        <BaseTemplate title="Dashboard">
            <div>
                <Search setSearchQuery={setSearchQuery} />
            </div>
            <div className="dashboard">
                <ItemsList items={searchResults.length > 0 ? searchResults.map(item => item.item) : users} />
                <IonAlert
                    isOpen={error !== ""}
                    onDidDismiss={() => setError("")}
                    header={"Error"}
                    message={error}
                    buttons={["OK"]}
                />
            </div>

            <IonFab
                vertical="bottom"
                horizontal="center"
                slot="fixed"
                style={{ marginBottom: '4em' }}
            >
                {/* <IonFabButton routerLink="/new">
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton> */}
            </IonFab>
            <LocationsPopover popoverState={locationsPopoverState} setShowPopover={setShowLocationsPopover} />
        </BaseTemplate>
  );
}

const mapStateToProps = ({ users }) => {

	return {
        users: Object.values(users)
	};
};

export default connect(mapStateToProps, { fetchUsers })(Dashboard);