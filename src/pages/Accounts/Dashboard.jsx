// src/components/Dashboard.js
import React from 'react';
import { LogoutButton } from '../components/Accounts/LogoutButton';

function Dashboard({ userProfile }) {
  if (!userProfile) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return (
    <div>
      <img src={`http://127.0.0.1:8000${userProfile.user.pfp}`} alt={userProfile.user.username} />
      <h1>Welcome, {userProfile.user.first_name} {userProfile.user.last_name}!</h1>
      <p>@{userProfile.user.username}</p>
      <p>{userProfile.is_guide ? "Guide" : userProfile.is_event_manager ? "Event Manager" : "Tourist"}</p>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;