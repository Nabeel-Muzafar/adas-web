import { createContext, useState, useEffect } from "react";
import { MdUnsubscribe } from "react-icons/md";
import { onAuthStateChangedListner, userDocument } from "../utils/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const Unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        userDocument(user);
      }
      setCurrentUser(user);
      //   console.log(user);
    });
    return Unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
