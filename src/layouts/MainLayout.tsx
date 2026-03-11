import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header className="p-4 bg-black text-white">Electronic Store</header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
