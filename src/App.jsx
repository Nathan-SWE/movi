import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useAuthStore } from "./stores/useAuthSore";

import "./App.css";

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setUser, setLoading]);

  return (
    <>
      <img
        src="https://i.pinimg.com/originals/ea/6f/95/ea6f95a379addc1c241ed91391974a86.gif"
        alt="pochita"
      />
    </>
  );
}

export default App;
