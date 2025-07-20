import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-green-100">
        <h2 className="text-3xl font-bold">Users Page</h2>
      </main>
    </div>
  );
};

export default Users;
