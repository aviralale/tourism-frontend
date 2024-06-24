// src/hooks/useAuthCheck.js
import { useEffect, useState } from "react";
import axios from "axios";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
      fetchUserProfile(token);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    // Create an axios instance with default config
    const api = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  
    try {
      // First, fetch the user data to get the username
      const userResponse = await api.get('users/me/');
      const userData = userResponse.data;
      const username = userData.username;
  
      // Now fetch the profile using the username
      const profileResponse = await api.get(`users/profile/${username}/`);
      const profileData = profileResponse.data;
  
      setUserProfile(profileData);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        handleAuthError(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error("Error config:", error.config);
    }
  };
  
  const handleAuthError = (response) => {
    if (response.status === 401) {
      setIsAuthenticated(false);
      localStorage.removeItem('access_token');
    }
    console.error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
  };

  return { isAuthenticated, userProfile };
};

export default useAuthCheck;