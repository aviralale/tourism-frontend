// src/hooks/useAuthCheck.js
import { useEffect, useState } from "react";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuthCheck;
