import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

//example axios post request
// const token = localStorage.getItem('inovio-token')
// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

// const body = {
//    key: "value"
// };

// const res = inovioApi.post( 
//   '/v1/endpoint',
//   body,
//   config
// );
// console.log(res);

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    async function login(email, password) {
        // const uid = localStorage.getItem('inovio-uid')
        // // check if uid exists in local storage if not create a new uid 
        // if(!uid) {
        //     uid = uid()
        //     localStorage.setItem('inovio-uid', uid)
        //     console.log(localStorage.getItem('inovio-uid'))
        // } 
        // const browserType = browserType()

        // console.log(uid)
        // const res = await inovioApi.post('/auth/login', {
        //     email, 
        //     password,
        //     uid,
        //     deviceInfo: navigator.userAgent
        // })

        // //returns token
        // console.log(res)
        // save token to localStorage
        // const decodedJwt = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTA5NzYxMzEsImV4cCI6MTYxMDk3NzAzMX0.6pfjlVGa6xdddls4LcPt9NLYJ4YFLS9dXRZxgIQRXsI")
        // console.log(new Date(decodedJwt.exp));
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return auth.currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                user.isAdmin = true;
                user.role = 'Administrator';
            } 
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
