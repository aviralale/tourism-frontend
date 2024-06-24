import axios from "axios";

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


export const logoutUser = async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      throw new Error("No refresh token found.");
    }

    // const response = await axios.post(
    //   "http://127.0.0.1:8000/api/users/logout/",
    //   { refresh_token: refreshToken },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // Remove tokens from local storage upon successful logout
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    return response;
  } catch (error) {
    throw error; // Propagate the error to handle it in the component
  }
};