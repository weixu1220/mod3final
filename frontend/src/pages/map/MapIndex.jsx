import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useEffect } from "react";
import { useLoadScript } from '@react-google-maps/api'
import { GoogleMap, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

const libraries = ['places'];

export default function MapIndex() {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    
    const center = useMemo(() => ({ lat: 39, lng: -96}))
    const [selected, setSelected] = useState(null);
    return (
        <div className="w-screen h-screen flex">
            <div className="w-4/12 flex flex-col h-full">
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
            <div className="w-8/12 h-full">
                <GoogleMap zoom={5} center={center} mapContainerClassName='w-full h-full'>
                    <Marker position={center} />
                    {selected && <Marker position={center} />}
                </GoogleMap>
            </div>
        </div>
    )
}
const PlacesAutocomplete = () => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const [location, setLocation] = useState("")

    const handleSelect = () => {
        console.log("handlSelect")
    }

    return (

        <div>
            <div className="flex wrap w-full mx-auto border-2 px-6 py-2">
                <div className="w-8/12 flex wrap justify-between  border-b border-black m-4">
                    <input
                        className="text-lg outline-none p-1"
                        type="text"
                        placeholder="Find a store"
                    />
                    <FontAwesomeIcon
                        className="w-fit mr-1"
                        size="xl"
                        icon={faMagnifyingGlass}
                    />
                </div>
                <button className="border-2 border-green-800 rounded-full font-semibold text-lg text-green-800 m-auto py-1 px-4">
                    Filter
                </button>
            </div>
            {!location && (
                <h1 className="font-semibold text-2xl mx-4 px-4 pt-8">
                    We are unable to access your exact location
                </h1>
            )}
            {!location && (
                <p className="text-md mx-4 p-4">
                    To find a Starbucks store, use the search feature, navigate using
                    the map, or turn on location services.
                </p>
            )}
        </div>
    )
}
