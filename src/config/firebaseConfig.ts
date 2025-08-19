import { initializeApp } from "firebase/app";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY || "",
  authDomain: process.env.AUTH_DOMAIN || "",
  projectId: process.env.PROJECT_ID || "",
  storageBucket: process.env.STORAGE_BUCKET || "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID || "",
  appId: process.env.APP_ID || "",
};

export const firebaseApp = initializeApp(firebaseConfig);
