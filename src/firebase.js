import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu6rO0rvDeiiW6xQtsPDOq7TDLRCY3z3E",
  authDomain: "patna-signage.firebaseapp.com",
  projectId: "patna-signage",
  storageBucket: "patna-signage.firebasestorage.app",
  messagingSenderId: "1056789639440",
  appId: "1:1056789639440:web:374e3e67c41d1e824ff595",
  measurementId: "G-12RKFF864N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally to avoid SSR/unsupported browser issues
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
