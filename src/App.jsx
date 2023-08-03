import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/detail/:countryName"
                    element={<CountryDetail />}
                />
            </Routes>
        </BrowserRouter>
    );
}
