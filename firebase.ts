// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAurF68eKiUzDCdE4ARuXEwyTh88N5fwe8',
  authDomain: 'projectmad-10e51.firebaseapp.com',
  projectId: 'projectmad-10e51',
  storageBucket: 'projectmad-10e51.firebasestorage.app',
  messagingSenderId: '148278149210',
  appId: '1:148278149210:web:7e4b29527cd92e25011863',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
