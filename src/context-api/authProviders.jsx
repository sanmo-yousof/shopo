// "use client";

// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext(null);

// const AuthProviders = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loader, setLoader] = useState(true);

//   // App start hobar sathe localStorage theke user load korbo
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoader(false);
//   }, []);

//   // Register korar somoy user save korar function
//   const registerUser = (userData) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   // Login function
//   const loginUser = (email, password) => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser && storedUser.email === email) {
//       setUser(storedUser);
//       return true;
//     }
//     return false;
//   };

//   const logoutUser = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   const value = {
//     user,
//     loader,
//     registerUser,
//     loginUser,
//     logoutUser,
//   };

//   return (
//     <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProviders;
