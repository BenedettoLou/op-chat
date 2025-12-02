import { useParams } from 'react-router';
import SearchBar from './search-bar.tsx'
import Patient from './patient.tsx'
/**
 *
 * @returns a view to the folders in the db
 * Manage a @component 'SearchBar' to filter patients by name or Serial number
 *
 * Fetch patient's datas from backend and create cards for each folder using @component 'Patient'
 */

function FoldersViewer() {



    return <>
        <div id="box">
            <SearchBar></SearchBar>
            <Patient></Patient>
            <Patient></Patient>
            <Patient></Patient>
            <Patient></Patient>
            <Patient></Patient>

        </div>
    </>
}

export default FoldersViewer
