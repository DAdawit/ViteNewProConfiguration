import { fetchUsers2 } from "@/Services/users";
import useUserStore from "@/Store/useUserStore";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "sonner";

const UserList = () => {
  // Get state and actions from store
  const users = useUserStore((state) => state.users);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const isServerError = useUserStore((state) => state.isServerError);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const getTotalUsers = useUserStore((state) => state.getTotalUsers);
  const getStats = useUserStore((state) => state.getStats);
  const [newUsers, setNewUsers] = React.useState([]);
  const [loading2, setLoading] = React.useState(true);
  const [serverError, setServerError] = React.useState(false);
  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(users);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetchUsers2();
        // toast.success("Users fetched successfully!");
        if (response?.users) {
          setNewUsers(response.users);
          setLoading(false);
          setServerError(false);
        }
      } catch {
        setLoading(false);
        setServerError(true);
      }
    };
    loadUsers();
  }, []);

  const totalUsers = getTotalUsers();
  const stats = getStats();

  if (isServerError || serverError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
        <p className="text-red-600">
          Server Error: Failed to fetch users (5xx or network error)
        </p>
      </div>
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={() => fetchUsers()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Show users
  return (
    <div className="p-6">
      <div className="p-4">
        <h2 className="text-xl font-bold">User Statistics</h2>
        <p>Total Users: {totalUsers}</p>
        <p>Active Users: {stats.activeUsers}</p>
        <p>Unique Companies: {stats.companies.length}</p>
        <p>Unique Cities: {stats.cities.length}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
            <p className="text-gray-600 text-sm">@{user.username}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm mt-2">{user.phone}</p>
          </div>
        ))}
      </div>
      {loading2 ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading users...</p>
          </div>
        </div>
      ) : (
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto">
          {JSON.stringify(newUsers, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default UserList;
