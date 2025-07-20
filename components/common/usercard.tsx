import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md mb-4 bg-white">
      <h2 className="text-lg font-bold mb-1">{user.name} (@{user.username})</h2>
      <p className="text-sm text-gray-700 mb-1">📧 {user.email}</p>
      <p className="text-sm text-gray-700 mb-1">📞 {user.phone}</p>
      <p className="text-sm text-gray-700 mb-1">🌐 {user.website}</p>
      <div className="text-sm text-gray-700">
        <p>🏠 {user.address.street}, {user.address.city}</p>
        <p>🏢 {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
