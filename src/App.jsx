import { useEffect } from "react";
import { signInAnonymously, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Forums from "./pages/Forums";
import Help from "./pages/Help";
import Counseling from "./pages/Counseling";

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
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-full flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/help" element={<Help />} />
              <Route path="/counseling" element={<Counseling />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;