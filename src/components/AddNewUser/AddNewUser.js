import React, { useRef, useState } from 'react';
import { IonCard, IonText, IonButton, IonCardContent, IonItem, IonSelectOption, IonSelect, IonAvatar, IonInput, IonLabel, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import BaseTemplate from '../base/BaseTemplate';
import './AddNewUser.css';
import { arrowBackOutline } from 'ionicons/icons';  
import { Link } from 'react-router-dom';

export default function AddNewItem() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading] = useState(false);
    const [ file, setFile ] = useState(null);
    const [ error, setError ] = useState('');

    function handleChange(e) {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);

        const types = [
            'image/png',
            'image/jpeg'
        ];

        if(selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png/jpeg).')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <BaseTemplate title="Add New User">
            <div className="add-new-user">
            <IonGrid>
                <IonRow>
                    <IonCol offset-md="3" size-md="6" >
                        <IonCard>
                            <IonCardContent style={{alignItems: 'center'}}>
                                <h1 style={{textAlign: 'center', marginBottom: '2em'}}>New User</h1>
                                <form onSubmit={handleSubmit}>
                                    <IonAvatar style={{height: '100px', width: '100px', margin: '0 auto'}}>
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" />
                                    </IonAvatar>
                                    <IonItem>
                                        {/* <IonLabel position="floating">
                                            Upload Image
                                        </IonLabel> */}
                                        <br />
                                        <label>
                                            <input type="file" onChange={handleChange} />
                                        </label>
                                        <div className="output">
                                            {error && <div className="error">{error}</div>}
                                            {file && <div>{file.name}</div>}
                                        </div>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            First Name
                                        </IonLabel>
                                        <IonInput type="email" required ref={emailRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            Last Name
                                        </IonLabel>
                                        <IonInput type="password" ref={passwordRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">
                                            Residence
                                        </IonLabel>
                                        <IonInput type="password" ref={passwordRef}>
                                        </IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>User Type</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="contractor">Contractor</IonSelectOption>
                                        <IonSelectOption value="resident">Resident</IonSelectOption>
                                        <IonSelectOption value="domestic">Domestic</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                        <h1>Access</h1>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Monday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Tuesday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Wednesday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Thursday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Friday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Saturday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonItem>
                                    <IonLabel>Sunday</IonLabel>
                                        <IonSelect okText="Okay" cancelText="Dismiss">
                                        <IonSelectOption value="brown">Full Day</IonSelectOption>
                                        <IonSelectOption value="blonde">Half Day - Morning</IonSelectOption>
                                        <IonSelectOption value="black">Half Day - Afternoon</IonSelectOption>
                                        <IonSelectOption value="red">None</IonSelectOption>
                                        </IonSelect>
                                    </IonItem>
                                    <IonButton type="submit" expand="block" style={{marginTop: '7em'}} disabled={loading}>
                                        Add
                                    </IonButton>
                                </form>
                            </IonCardContent>
                        </IonCard>
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            marginTop: '2em'
                        }}>
                            <IonText>
                                <Link to="/">Cancel</Link>
                            </IonText>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            </div>
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
        </BaseTemplate>
    )
}
