import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Home } from "./components/Home";
import firebaseApp from "./config/firebaseConfig.ts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      { user ? <Home /> : <Form />}
    </div>
  );
}

export default App;
