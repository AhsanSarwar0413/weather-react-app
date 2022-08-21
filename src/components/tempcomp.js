import React, { useEffect, useState } from 'react';
import "./css/style.css";


const Tempcomp = () => {

    const [City, setCity] = useState(null);
    const [Search, setSearch] = useState("Lahore");

    useEffect(() => {
        const fetchApi = async () => {
            const Url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=b5ecf12eba0cb87611891dcc23dd0fe2`
            const response = await fetch(Url);
            const responseJson = await response.json();
            setCity(responseJson.main);
        }
        fetchApi();
    }, [Search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={Search}
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!City ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <><div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i>
                            {Search}
                        </h2>
                        <h1 className="temp">

                            {City.temp}°Cel
                        </h1>
                        <h3 className="tempmin_max">Min: {City.temp_min}°Cel | Max: {City.temp_max}°Cel </h3>
                    </div><div className="wave -one"></div><div className="wave -two"></div><div className="wave -three"></div></>
                )}

            </div>
        </>
    )
}

export default Tempcomp;