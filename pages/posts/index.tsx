import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-blue-100">
        <h2 className="text-3xl font-bold">Posts Page</h2>
      </main>
    </div>
  );
};

export default Posts;
