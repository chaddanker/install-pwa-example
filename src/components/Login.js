import React, { useRef, useState, useEffect } from 'react';
import { IonCard, IonText, IonButton, IonCardContent, IonItem, IonInput, IonLabel, IonGrid, IonRow, IonCol, IonAlert } from '@ionic/react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'; 
import './Login.css';

export default function Login({ setChangingPage }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function alertDismiss() {
        setChangingPage(false);
        setError('');
    }

    useEffect(() => {
        setChangingPage(false);
    }, [setChangingPage]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(true);
            history.push('/dashboard');
        } catch {
            setError('failed to sign in');
        }
        setLoading(false);
        
    }

    return (
        <div className="login">
            <IonGrid>
                <IonRow>
                    <IonCol offset-md="3" size-md="6">
                        <IonCard>
                            <IonCardContent>
                                <h1 style={{textAlign: 'center', fontWeight: 100, marginBottom: '2em'}}>Login</h1>
                                <form onSubmit={handleSubmit}>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            Email
                                        </IonLabel>
                                        <IonInput type="email" required ref={emailRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            Password
                                        </IonLabel>
                                        <IonInput type="password" required ref={passwordRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonButton onClick={() => setChangingPage(true)} type="submit" expand="block" style={{marginTop: '7em'}} disabled={loading}>
                                        Login
                                    </IonButton>
                                </form>
                                <div className="forgot-password-div">
                                    <IonText>
                                        <Link to="/forgot-password">forgot password?</Link>
                                    </IonText>
                                </div>
                            </IonCardContent>                       
                        </IonCard>
                        <div className="sign-up-div">
                            <IonText>
                                Need an account? <Link to="/signup">Sign Up</Link>
                            </IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonAlert
                isOpen={error !== ''}
                onDidDismiss={() => alertDismiss()}
                header={'Error'}
                message={error}
                buttons={['OK']}
            />
        </div>
    )
}
