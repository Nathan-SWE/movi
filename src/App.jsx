import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet } from "react-router-dom";
import { auth } from "./services/firebase";
import { useAuthStore } from "./stores/useAuthStore";

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
      <Outlet />
    </>
  );
}

export default App;
