import './App.css'
import React, {useEffect, useState} from 'react';
import {Route} from "./models/routes";

function App() {

    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        routesDataWithFetch();
    }, []);

    const routesDataWithFetch = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + '/routes');
        const jsonData = await response.json();
        setRoutes(jsonData);
    };

    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Start Position (lat, lng)</th>
                <th>End Position (lat, lng)</th>
            </tr>
            {routes.map(route => (
                <tr>
                    <td>{route.title}</td>
                    <td>({route.startPosition.lat}, {route.startPosition.lng})</td>
                    <td>({route.endPosition.lat}, {route.endPosition.lng})</td>
                </tr>
            ))}
        </table>
    );
}

export default App;
