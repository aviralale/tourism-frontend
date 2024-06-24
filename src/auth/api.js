import axios from "axios";
import { useNavigate } from "react-router-dom";

export const registerUser = async (formData) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/users/signup/",
    {
      first_name: formData.firstName,
      last_name: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      is_guide: formData.isGuide,
      is_event_manager: formData.isEventManager,
      pfp: null,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};


export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/users/login/",
      {
        email: formData.email,
        password: formData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response; // Ensure you're returning the entire response object
  } catch (error) {
    throw error; // Propagate the error to handle it in the component
  }
};


export const useLogoutUser = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      const accessToken = localStorage.getItem("access_token");

      if (!refreshToken || !accessToken) {
        throw new Error("No tokens found.");
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/logout/",
        { refresh_token: refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          },
        }
      );

      // Remove tokens from local storage upon successful logout
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      // Navigate to home page
      navigate('/');

      return response.data.message; // Return the success message
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(error.response.data.error || "Logout failed");
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error("Error setting up the request");
      }
    }
  };

  return logoutUser;
};