import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./layouts/AppLayout.jsx";
import WeatherPage from "./APIS/WeatherPage";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={"apis/clima"} element={ <WeatherPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
