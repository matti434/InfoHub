import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const WatherMap = ({ lat, lon, city }) => {

    if (lat == null || lon == null) return null;
    const position = [lat, lon];

    return (

        <MapContainer
            center={position}
            zoom={10}
            style={{ height: "200px", width: "100%" }}
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>{city}</Popup>
        </Marker>
    </MapContainer >

  )
}

export default WatherMap