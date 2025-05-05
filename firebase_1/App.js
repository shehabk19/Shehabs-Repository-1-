// App.js
import React, { useState } from 'react';
import { signUp, login, uploadMedia, getMediaUrl, createData, getData } from './firebaseFunctions';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [userData, setUserData] = useState({ name: '', sport: '', performanceLevel: '' });
  const [mediaUrl, setMediaUrl] = useState(null);
  const [allData, setAllData] = useState([]);

  const handleSignUp = () => {
    signUp(email, password);
  };

  const handleLogin = () => {
    login(email, password);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    uploadMedia(file);
  };

  const handleCreateData = () => {
    createData(userData);
  };

  const handleGetData = async () => {
    const data = await getData();
    setAllData(data);
  };

  const handleGetMediaUrl = async () => {
    if (file) {
      const url = await getMediaUrl(file.name);
      setMediaUrl(url);
    }
  };

  return (
    <div>
      <h1>Peak Performance App</h1>

      {/* Authentication Section */}
      <div>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>

        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
      </div>

      {/* Media Upload Section */}
      <div>
        <h2>Upload Performance Media</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handleGetMediaUrl}>Get Media URL</button>
        {mediaUrl && <img src={mediaUrl} alt="Uploaded Media" />}
      </div>

      {/* Firestore Data Section */}
      <div>
        <h2>Create Athlete Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Sport"
          value={userData.sport}
          onChange={(e) => setUserData({ ...userData, sport: e.target.value })}
        />
        <input
          type="text"
          placeholder="Performance Level"
          value={userData.performanceLevel}
          onChange={(e) => setUserData({ ...userData, performanceLevel: e.target.value })}
        />
        <button onClick={handleCreateData}>Create Profile</button>
        <button onClick={handleGetData}>Get All Profiles</button>

        <h3>Athlete Profiles:</h3>
        <ul>
          {allData.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Sport: {data.sport}, Performance Level: {data.performanceLevel}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
