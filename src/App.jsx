import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import BootstrapNavbar from "./components/shared/Navbar/Navbar.jsx"

function App() {
  return (
    <>
      <BrowserRouter>

        <main>
          <Routes>
            <Route path="" element={<BootstrapNavbar />}></Route>
            <Route path="" element={<Home />}></Route>
          </Routes>
        </main>

      </BrowserRouter>
    </>
  );
}

export default App;
