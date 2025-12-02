import { Link, useParams } from "react-router";


function PatientViewer() {
    /**
     * NOT WORKING YET
     */
    let params = useParams();
    let patient = params.patient

    return <>
        <div>
            <Link to="/folders">Back</Link>
            <h2>Patient Viewer</h2>
            <p>Viewing details for patient with Serial #: {patient} </p>
        </div>
    </>
}

export default PatientViewer;
