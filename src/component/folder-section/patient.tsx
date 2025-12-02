import { Link, useParams } from "react-router";
import "./patient.css"
/**
 *
 * @returns a patient card to click on that preserve the Serial number
 * of the patient and general info like name and Surname and birthdate
 */
function Patient({Serial, Name, Birthdate}: {Serial?: string, Name?: string, Birthdate?: string}) {
    return <>
        <div className="patient-card">
            <p>Patient Serial #: {Serial}</p>
            <p>Name: {Name}</p>
            <p>Birthdate: {Birthdate}</p>
            <Link to={`${Serial}`}>See details</Link>
        </div>
    </>
}
export default Patient
