import { getUsers } from "@/Services/userService";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const UsersList2 = () => {
  // Query for fetching users
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">Error: {error.message}</p>
        <button
          onClick={refetch}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users List ({data?.length || 0})</h2>
        <div className="space-x-2">
          <button
            onClick={refetch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md"
          >
            <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
            <p className="text-gray-600 text-sm">@{user.username}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm mt-2">{user.phone}</p>
          </div>
        ))}
      </div>

      {/* JSON Preview */}
      <div>
        <h3 className="text-lg font-semibold mb-2">API Response (JSON)</h3>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default UsersList2;
