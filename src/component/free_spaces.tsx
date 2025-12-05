import "./free_spaces.css";
import React, { useEffect, useState } from "react";
import Space from "./space.tsx";
/**
 * Contains the free @component 'spaces' available for booking
 */

interface spacesData {
    id: string;
    // Add other properties your space has, for example:
    name?: string;
    status?: boolean;
}

function FreeSpaces() {

    const [freeSpaces, setFreeSpaces] = useState<spacesData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Fetch free spaces when component mounts
        fetchFreeSpaces();
    }, []);

    function fetchFreeSpaces() {
        // Simulate fetching data from an API
        setLoading(true);
        setError(null);
        fetch('https://localhost:7000/freespaces')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch free spaces');
                }
                return response.json();
            })
            .then((data) => {
                setFreeSpaces(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return <>
        <div id="box">

            {loading && <p>Loading free spaces...</p>}

            {error && <p>Error loading free spaces: {error}</p>}

            {!loading && !error && freeSpaces.length === 0 && <p>No free spaces available.</p>}

            {!loading && !error && freeSpaces.map((space) => (
                <Space
                    id={space.id}
                    name={space.name}
                    status={space.status}

                />
            ))}

        </div>

    </>
}

export default FreeSpaces
