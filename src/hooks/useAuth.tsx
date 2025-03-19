
import * as React, { useState, createContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";

const authContext = createContext(false);


function useAuth() {
  const [authed, setAuthed] = useState(false);

    const login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential - signIn :", userCredential);
        const user = userCredential.user;
        localStorage.set('user', JSON.stringify(user))
        setAuthed(true);
      })
      .catch((error) => {
        return error;
      });
    }

    const logout = () => {
      console.log('logout')
    }

    return {
      authed,
      login,
      logout
    }
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer() {
  return useContext(authContext);
}