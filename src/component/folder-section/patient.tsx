import { useParams } from "react-router";
import "./patient.css"
/**
 *
 * @returns a patient card to click on that preserve the Serial number
 * of the patient and general info like name and Surname and birthdate
 */
function Patient() {

    let params = useParams(); // params.teamId

    return <>
        <div className="patient-card">
            <p>Patient Serial #: 123456</p>
            <p>Name: John Doe</p>
            <p>Birthdate: 01/01/1980</p>
        </div>
    </>
}
export default Patient
