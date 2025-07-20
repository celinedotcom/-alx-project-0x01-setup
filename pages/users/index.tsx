import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [userList, setUserList] = useState(users);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    // Add the new user with an incremented id
    const newUserWithId = { ...newUser, id: userList.length + 1 };
    setUserList((prev) => [...prev, newUserWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow overflow-auto">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {showModal && (
          <UserModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
