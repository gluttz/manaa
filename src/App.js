import "./styles/App.css";
import { useState, createContext } from "react";
import RouteSwitch from "./RouteSwitch";
import Header from "./components/Header";
import gnome from "./assets/images/gnome.jpg";

export const Context = createContext();

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const [user, setUser] = useState({
        name: "gluttz",
        avatar: gnome,
        balance: 23.49,
    });
    return (
        <>
            <Context.Provider
                value={{ isDarkTheme, setIsDarkTheme, user, setUser }}
            >
                <Header />
                <RouteSwitch />
            </Context.Provider>
        </>
    );
};
export default App;
