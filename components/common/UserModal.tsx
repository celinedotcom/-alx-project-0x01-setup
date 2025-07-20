import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
      suite: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressKey = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressKey]: value,
        },
      }));
    } else if (name.startsWith("company.")) {
      const companyKey = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [companyKey]: value,
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          {/* Address */}
          <input
            type="text"
            name="address.street"
            value={user.address.street}
            onChange={handleChange}
            placeholder="Street"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="address.city"
            value={user.address.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="address.zipcode"
            value={user.address.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {/* Phone & Website */}
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {/* Company */}
          <input
            type="text"
            name="company.name"
            value={user.company.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="company.catchPhrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            placeholder="Company Catch Phrase"
            className="w-full px-4 py-2 border rounded-lg"
          />
          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
