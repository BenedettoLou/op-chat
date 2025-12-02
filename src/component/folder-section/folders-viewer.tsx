import { createRoutesFromChildren, Link, useParams } from 'react-router';
import SearchBar from './search-bar.tsx'
import Patient from './patient.tsx'
import './folders-viewer.css'
/**
 *
 * @returns a view to the folders in the db
 * Manage a @component 'SearchBar' to filter patients by name or Serial number
 *
 * Fetch patient's datas from backend and create cards for each folder using @component 'Patient'
 */

function FoldersViewer() {

    return <>
        <div id="boxy">
            <Link to="/">Back</Link>
            <SearchBar></SearchBar>
            <div id="container">
                <Patient Serial='r3924'></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
                <Patient></Patient>
            </div>


        </div>
    </>
}

function fetchPatients() {

    for (let index = 0; index < 10; index++) {
        return <Patient Serial="ie23"></Patient>

    }
    /**
     * NOT WORKING YET
     * fetch patients from backend api
     */
}

export default FoldersViewer


