// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useEffect } from "react";
import { useLoadScript } from '@react-google-maps/api'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const libraries = ['places'];

export default function MapIndex() {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries,
    });

    if (loadError) { console.log(loadError) }

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {

    const center = useMemo(() => ({ lat: 39, lng: -96 }))
    const [selected, setSelected] = useState(center);
    const [zoom, setZoom] = useState(5);
    console.log("selected: ", selected)

    useEffect(() => {
        // Set zoom level based on distance
        if (selected !== center) {
            // If the distance is greater than a certain threshold (adjust as needed)
            setZoom(12);
        } else {
            setZoom(5);
        }
    }, [selected]);

    return (
        <div className="w-screen h-screen flex">
            <div className="w-4/12 flex flex-col h-full">
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
            <div className="w-8/12 h-full">
                <GoogleMap zoom={zoom} center={selected} mapContainerClassName='w-full h-full'>
                    {selected && <MarkerF position={selected} keyword="Starbucks" />}
                </GoogleMap>
            </div>
        </div>
    )
}
const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const ref = useOnclickOutside(() => {
        // When the user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => {
        setValue(description, false);
        clearSuggestions();
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
            setSelected({ lat, lng })
        });
    }

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <p className="hover:bg-gray-200" key={place_id} role='menuitem' onClick={() => handleSelect(suggestion)} ref={ref}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </p>
            );
        });
    return (

        <div className="h-screen flex flex-col">
            <div className="h-screen flex flex-col justify-between border-2">
                <div>
                    <div className="flex">
                        <div className="w-10/12 mb-0">
                            <div className="w-10/12 flex wrap justify-between  border-b border-black m-4" >
                                <input
                                    className="text-lg outline-none p-1"
                                    value={value}
                                    onChange={handleInput}
                                    disabled={!ready}
                                    placeholder="Find a store"
                                />
                                {/* <FontAwesomeIcon
                                    className="w-fit mr-1"
                                    size="xl"
                                    icon={faMagnifyingGlass}
                                /> */}
                            </div>
                            <div className='w-10/12 shadow-xl mx-4' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                                {status === 'OK' && <div role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>{renderSuggestions()}</div>}
                            </div>
                        </div>
                        <div>
                            <button className="border-2 border-green-800 rounded-full font-semibold text-lg text-green-800 my-4 py-1 px-4">
                                Filter
                            </button>
                        </div>
                    </div>
                    <div>
                        {!value && (
                            <h1 className="font-semibold text-2xl mx-4 px-4 pt-8">
                                We are unable to access your exact location
                            </h1>
                        )}
                        {!value && (
                            <p className="text-md mx-4 p-4">
                                To find a Starbucks store, use the search feature, navigate using
                                the map, or turn on location services.
                            </p>
                        )}
                    </div>
                </div>
                <div className="h-96 flex flex-col m-8">
                    <p className="text-green-800 font-bold">Privacy Notice</p>
                    <p className="text-green-800 font-bold">Terms of Use</p>
                    <p className="text-green-800 font-bold">Do Not Share My Personal Information</p>
                </div>

            </div>
        </div>
    )
}
