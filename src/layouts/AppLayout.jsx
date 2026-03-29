import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar.jsx";
import Footer from "../components/shared/Footer/Footer.jsx";

function AppLayout() {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">
      <Navbar />
      <main className="app-main flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
