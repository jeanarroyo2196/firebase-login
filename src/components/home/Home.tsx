import { Navbar } from "../shared/navbar/Navbar";

export const Home = () => {
  return (
    <main>
      <div>
        <Navbar />;
      </div>
      <div>
        <h1 className="text-4xl text-center text-white mt-10">
          Welcome to the Home Page
        </h1>
        <p className="text-center text-gray-400 mt-4">
          This is the home page of your application.
        </p>
      </div>
    </main>
  );
};
