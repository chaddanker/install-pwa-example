import React, { useEffect } from 'react';
import { IonCard, IonCardContent, IonFab, IonFabButton, IonIcon, IonSlides, IonSlide } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import BaseTemplate from './base/BaseTemplate';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

import './UserView.css';

function UserView({fetchUser, user}) {
    const params = useParams();

    const slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    useEffect(() => {
        fetchUser(params.id);
    }, [params.id, fetchUser]);

    return (
        <BaseTemplate>
            <div className="user-view">
                <IonCard>
                    <IonCardContent>
                    <IonSlides pager={true} options={slideOpts}>
                        <IonSlide>
                            <img src={user.avatar} alt="user avatar"/>
                        </IonSlide>
                        <IonSlide>
                            <h1>Slide 2</h1>
                        </IonSlide>
                        <IonSlide>
                            <h1>Slide 3</h1>
                        </IonSlide>
                    </IonSlides>
                        <div>
                            {user.name}
                        </div>
                        <div id="mapContainer"/>
                    </IonCardContent>
                </IonCard>
                <IonFab
                vertical="top"
                horizontal="start"
                slot="fixed"
                style={{ marginBottom: '3em' }}
                >
                    <IonFabButton routerLink="/">
                        <IonIcon icon={arrowBackOutline}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </div>
        </BaseTemplate>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.users['u-1']
    }
}

export default connect(mapStateToProps, { fetchUser })(UserView);