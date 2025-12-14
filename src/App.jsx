import { useEffect } from "react";
import { signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Forums from "./pages/Forums";
import Help from "./pages/Help";

import { generateUsername } from "./utils/username";

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // Sign in anonymously
        const result = await signInAnonymously(auth);

        // Generate username
        const username = generateUsername();

        // Assign username to user profile
        await updateProfile(result.user, {
          displayName: username,
        });

        console.log("Anonymous user created:", username);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
