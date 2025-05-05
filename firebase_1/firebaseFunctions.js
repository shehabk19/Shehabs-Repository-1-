// firebaseFunctions.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "peak-performance.firebaseapp.com",
  projectId: "peak-performance",
  storageBucket: "peak-performance.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

// Sign Up Function
export const signUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert('User created successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Login Function
export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert('Logged in successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Upload Media Function (to Firebase Storage)
export const uploadMedia = async (file) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(file.name);
  try {
    await fileRef.put(file);
    alert('File uploaded successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Get Media URL Function (to retrieve media)
export const getMediaUrl = async (fileName) => {
  const fileRef = storage.ref().child(fileName);
  try {
    const url = await fileRef.getDownloadURL();
    return url;
  } catch (error) {
    console.error(error.message);
  }
};

// Create Data (Firestore)
export const createData = async (userData) => {
  try {
    await firestore.collection('users').add(userData);
    alert('Data added successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Read Data (Firestore)
export const getData = async () => {
  try {
    const snapshot = await firestore.collection('users').get();
    const data = snapshot.docs.map(doc => doc.data());
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

// Update Data (Firestore)
export const updateData = async (docId, newData) => {
  try {
    await firestore.collection('users').doc(docId).update(newData);
    alert('Data updated successfully');
  } catch (error) {
    console.error(error.message);
  }
};

// Delete Data (Firestore)
export const deleteData = async (docId) => {
  try {
    await firestore.collection('users').doc(docId).delete();
    alert('Data deleted successfully');
  } catch (error) {
    console.error(error.message);
  }
};
