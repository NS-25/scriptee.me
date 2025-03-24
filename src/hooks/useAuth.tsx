import { useState, createContext, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext(null); // should be object

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in: ", userCredential);

        localStorage.setItem("user", JSON.stringify(userCredential.user)); // store user in local storage.
        setAuthed(true);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Login error: ", error.message);
        return error;
      });
  };

  // const logout = () => {
  //   console.log("logout");
  // };

  return (
    <AuthContext.Provider value={{ authed, login }}>
      {children}
    </AuthContext.Provider>
  );
}

// export function AuthProvider({ children }) {
//   const auth = useAuth();

//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

export function AuthConsumer() {
  return useContext(AuthContext);
}
