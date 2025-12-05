import { createRoutesFromChildren, Link, useParams } from 'react-router';
import SearchBar from './search-bar.tsx'
import Patient from './patient.tsx'
import './folders-viewer.css'
import { useEffect, useState } from 'react';


/**
 * Structure of patient data fetched from backend
 */
interface PatientData {
    Name: string;
    Serial: string;
    Birthdate: string;
    // Add other properties your patient has, for example:
    // name?: string;
    // age?: number;
}

/**
 *
 * @returns a view to the folders in the db
 * Manage a @component 'SearchBar' to filter patients by name or Serial number
 *
 * Fetch patient's datas from backend and create cards for each folder using @component 'Patient'
 */

function FoldersViewer() {

    const [patients, setPatients] = useState<PatientData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch patients on component mount
    useEffect(() => {
        // Fetch patients when component mounts
        fetchPatients();
    }, []);

    // Function to fetch patients from backend
    async function fetchPatients() {
        try {
            setLoading(true);

            const response = await fetch('https://localhost:7000/patients');

            if (!response.ok) {
                throw new Error('Failed to fetch patients');
            }
            const data = await response.json();
            setPatients(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return <>
        <div id="boxy">
            <Link to="/">Back</Link>
            <SearchBar></SearchBar>
            <div id="container">
                {loading && <p>Loading patients...</p>}

                {error && <p>Error: {error}</p>}

                {!loading && !error && patients.map((patient) => (
                    <Patient
                        Name={patient.Name}
                        Serial={patient.Serial}
                    />
                ))}

                {!loading && !error && patients.length === 0 && (
                    <p>No patients found</p>
                )}
            </div>


        </div>
    </>
}



export default FoldersViewer


