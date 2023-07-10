import "../styles/Store.css";
import { useState, useEffect } from "react";

const Store = () => {
    const [gameData, setGameData] = useState();

    useEffect(() => {
        async function fetchData() {
            const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${process.env.RAWGAPIKEY}`;
            const options = {
                method: "GET",
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="store">
                <div className="store-hero">
                    <div className="store-hero-content"></div>
                </div>
            </div>
        </>
    );
};

export default Store;
