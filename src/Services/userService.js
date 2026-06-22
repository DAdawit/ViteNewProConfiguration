// Services/userService.js
import axios from "axios";

// Get all users
export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response.data || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Add new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      userData,
    );
    return response.data || {};
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
