import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterList from "./pages/Characters/CharacterList";
import CharacterDetails from "./pages/Characters/CharacterDetails";
import Layout from "./pages/Layout";
import {paths} from "./routes";
import PlanetList from "./pages/Planets/PlanetList";
import VehicleList from "./pages/Vehicles/VehicleList";
import ScrollToTop from "./utils/ScrollToTop";
import PlanetDetails from "./pages/Planets/PlanetDetails";
import VehicleDetails from "./pages/Vehicles/VehicleDetails";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Layout>
                <Routes>
                    <Route path="/" element={<CharacterList/>}/>
                    <Route path={paths.CHARACTERS} element={<CharacterList/>}/>
                    <Route path={`${paths.CHARACTERS}:id`} element={<CharacterDetails/>}/>
                    <Route path={paths.PLANETS} element={<PlanetList/>}/>
                    <Route path={`${paths.PLANETS}:id`} element={<PlanetDetails/>}/>
                    <Route path={paths.VEHICLES} element={<VehicleList/>}/>
                    <Route path={`${paths.VEHICLES}:id`} element={<VehicleDetails/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
