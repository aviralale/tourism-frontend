import React from 'react';
import { logoutUser } from '@/auth/api'; // Adjust the path accordingly

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      // Optionally redirect or perform other actions after successful logout
      console.log("Logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle error as needed, such as showing an error message to the user
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
