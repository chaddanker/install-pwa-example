import React, { useEffect, useState } from 'react';
import { IonSearchbar } from '@ionic/react';  

import './Search.css';

export default function Search({style, setSearchQuery}) {
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        setSearchQuery(searchText);
    }, [searchText, setSearchQuery]);

    return (
        <div className="search">
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
        </div>
    )
}
