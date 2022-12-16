import { createContext, useState,useEffect } from "react";
import jwt_decode from 'jwt-decode'
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null) 

  const loginUser = (token) => {
    window.sessionStorage.setItem("token", token);
    const decoded = jwt_decode(token) 
    setUser(decoded)
    setIsAuth(true);
  };
  const logout = () => {
    window.sessionStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    const token=window.sessionStorage.getItem('token');
    if (token) {
        setIsAuth(true); 
        const decoded = jwt_decode(token) 
        setUser(decoded)
    }
  }, [])

  const values = {isAuth, loginUser, logout, user};

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;