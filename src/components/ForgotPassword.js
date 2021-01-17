import React, { useRef, useState } from 'react';
import { IonCard, IonText, IonButton, IonCardContent, IonItem, IonInput, IonLabel, IonGrid, IonRow, IonCol, IonAlert } from '@ionic/react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'; 

import './ForgotPassword.css';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch {
            setError('failed to reset password');
        }
        setLoading(false);
        
    }

    return (
        <div className="forgot-password">
            <IonGrid>
                <IonRow>
                    <IonCol offset-md="3" size-md="6">
                        <IonCard>
                            <IonCardContent>
                                {/* {currentUser.email} */}
                                <h1 className="heading" style={{marginBottom: '2em'}}>Password Reset</h1>
                                <form onSubmit={handleSubmit}>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            Email
                                        </IonLabel>
                                        <IonInput type="email" required ref={emailRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonButton type="submit" expand="block" style={{marginTop: '7em'}} disabled={loading}>
                                        Reset Password
                                    </IonButton>
                                </form>
                                <div className="login-link-div">
                                    <IonText>
                                        <Link to="/login">login</Link>
                                    </IonText>
                                </div>
                            </IonCardContent>
                        </IonCard>
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '2em'
                        }}>
                            <IonText>
                                Need in account? <Link to="/signup">Sign Up</Link>
                            </IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonAlert
                isOpen={error !== ''}
                onDidDismiss={() => setError('')}
                header={'Error'}
                message={error}
                buttons={['OK']}
            />
            <IonAlert
                isOpen={message !== ''}
                onDidDismiss={() => setMessage('')}
                header={'Success'}
                message={message}
                buttons={['OK']}
            />
        </div>
    )
}
